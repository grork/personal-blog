---
title: Using embedded and IoT devices with a VPN
tags: [ "vpn", "working-from-home", "software" ]
description: I needed to connect smart devices to a VPN. Here's what I found
---
Modern embedded devices such as connected media players (Apple TV, Roku, Smart
TVs), or IoT (internet of things) devices are constrained in what you, the end
user, can change in configuration, and the software you can run. This is for
good reasons — providing a secure environment for media devices, or enabling
‘zero maintenance’ of IoT devices.

With the extended work from home situation created by the pandemic, software
engineers whose jobs require working with these devices need to be able to
connect their devices to under development services that are _inside_ a
protected network (aka behind a corporate VPN connection). For normal
client-platform development (mobile, desktop, web) this isn’t a problem — just
fire up VPN on the device, and you’re off to the races.

However, with these embedded devices you can’t install a VPN on your Roku, Apple
TV, or air conditioner. In some instances, you can’t even configure an HTTP
proxy to capture traffic over your development machines established VPN. One
option is to use [MITM proxy](https://www.mitmproxy.org) in ‘[transparent
proxy](https://docs.mitmproxy.org/stable/concepts-modes/#transparent-proxy)’
mode ([long configuration
here](https://docs.mitmproxy.org/stable/howto-transparent/)) — configure the IP
manually on your device, specifying the gateway as the proxy. This is powerful,
and also helps facilitate cases where you want to intercept the HTTP traffic
(and SSL if you can install certificates on the device). However, there are some
corner cases:
- **DNS Lookup** If your under-development hosts are on different host names,
  you need to ensure DNS look ups can be performed using the VPNs DNS. The MITM
  mode doesn’t provide for that capability directly. This is especially true if
  the DNS look up can _only_ be performed from inside your private network to
  correctly resolve.
- **Non-HTTP traffic** While many applications use HTTP as a transport layer,
  not all applications do. If that’s the case for your application, it may be a
  challenge.

As I was trying to solve this problem I realized that at its core, this was just
a _routing_ (as hinted at by the [MITM transparent proxy
instructions](https://docs.mitmproxy.org/stable/howto-transparent/)). I also had
a Raspberry Pi sitting around doing not-a-lot. Since linux can often be used as
a router & NAT, I wondered if it was possible to configure my Pi as a gateway
for my media devices. After much learning, I realized the answer was “yes”.

## Background Reading
I’m never one to just blindly follow instructions, I spent a reasonable amount
of time doing some background reading. If you hit problems, maybe some of this
reading might help. Or maybe you have a unique situation, these might help you
cobble together a solution.
- [How to use your Raspberry Pi as a wireless access
  point](https://thepi.io/how-to-use-your-raspberry-pi-as-a-wireless-access-point/):
  This one really helped frame in my mind the approach. However, I prefer things
  wired, to eliminate wireless problems while debugging, so it wasn’t *quite*
  right for my needs.
- [How to use your Raspberry Pi as a VPN
  router](https://thepi.io/how-to-use-your-raspberry-pi-as-a-vpn-router/): This
  was very much a template. However, it still wasn’t quite right since if the
  VPN was down, packets would egress the normal way to the internet, and I
  wanted to make sure that device state etc didn’t get polluted with public
  internet DNS caches etc.
- [MITM Transparent Proxy
  Configuration](https://docs.mitmproxy.org/stable/howto-transparent/): Just
  provided enough background on the different commands etc.
- [OpenVPN Reference
  Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/):
  OpenVPN was the VPN client I was using, so this really helped let me know my
  options.
- [IP Routing Tables](http://linux-ip.net/html/routing-tables.html): It’s all
  about the tables, yo.

## The Details
There are some assumptions here. You are:
1. Using Linux
2. Don’t want IPv6 _at all_
3. Don’t want your router to egress via the VPN
4. Using OpenVPN is your VPN client
5. Already setup & tested the connection to your private VPN
6. Familiarity with command line, SSH etc

### Configure the router device
1. Disable IPv6 completely: in `/etc/sysctl.conf` set
   `net.ipv6.conf.all.disable_ipv6=1`
2. [Install
   UFW](https://www.raspberrypi.org/documentation/configuration/security.md) &
   configure it work only on the VPN interface
    1. `ufw allow in eth0` (Allow all inbound connections on the eth0 interface)
    2. `ufw allow out eth0` (Allow all outbound connections on the eth0
       interface)
    3. `ufw deny in tun0` (Deny any inbound connections on the tun0 interface)
    4. `ufw allow out tun0` (Allow any output connection on the tun0 interface)
3. Create a new routing table in `/etc/iproute2/rt_tables`. I chose
   `200 openvpn` for the priority & name.

### Finagle the VPN profile
This is dependent on your VPN profile configuration, so this covers the
_changes_ you need to make relative to whatever configuration your VPN profile
already has:
1. Add `pull-filter ignore redirect-gateway` : This prevents traffic on the
   device acting as the router from egressing via the VPN. If you don’t mind or
   need that, you can skip this.
2. Add `script-security-level 2`: This allows scripts to be executed when the
   connection is established or torn down. _This is probably the most critical
   part of VPN setup_.
3. Add `route-up /path/to/script/to/run/up.sh`: Runs once the connection has
   been established, routing tables have completed, and _after_ any route delay.
   This means the connection is ready to roll, and any configuration for the
   system has been applied.
4. Add `route-pre-down /path/to/script/to/run/down.sh`: Runs before any
   configuration changes are made as part of tearing down the VPN connection.
   This allows you to read configuration, and remove any added in `up.sh` before
   the connection is actually torn down.

### Create the up.sh & down.sh files
This is where the magic ✨ happens — reconfiguration of IP tables, routing, NAT
etc inline with the VPN status to make sure that any connected devices are no
longer able to egress to the network.

The files below are tweaked versions of the ones I’ve been using for a few
months now. Edit for your configuration as needed — IPs, file paths etc.

#### up.sh
Place this at the location you chose for your `route-up` command earlier
```bash
#! /bin/bash
# Log Useful information
echo --- Setting up routes >> ~/vpn_log.txt
echo -n "IP $ifconfig_local, " >> ~/vpn_log.txt
echo Gateway $ifconfig_remote  >> ~/vpn_log.txt

# Configure the routes
# Add a route for our gateway from the local IP
# Add Additional devices with static IPs here
ip rule add from 192.168.0.42 table openvpn # Device A IP address

# openvpn here refers to the routing table you created in /etc/iproute2/rt_tables
ip route add default via $ifconfig_remote dev tun0 table openvpn

# Set up the SNAT rule
iptables -t nat -A POSTROUTING -o tun0 -j SNAT --to-source $ifconfig_local

# Enable Routing
sysctl -w net.ipv4.ip_forward=1
```

#### down.sh
Place this at the location you chose for your `route-pre-down` command earlier
```bash
#! /bin/bash
# Log Useful Information
echo --- Tearing Down >> ~/vpn_log.txt
echo -n "IP $ifconfig_local, " >> ~/vpn_log.txt
echo Gateway $ifconfig_remote  >> ~/vpn_log.txt

# Disable IP Forwarding before dropping routes
# This is important, becuase we don't want packets
# leaking via the default route, and people thinking we're
# not located at the VPN egress
sysctl -w net.ipv4.ip_forward=0

# Remove the nat rule
iptables -t nat -D POSTROUTING -o tun0 -j SNAT --to-source $ifconfig_local

# Remove Routing Rules
# openvpn here refers to the routing table you created in /etc/iproute2/rt_tables
ip route del default via $ifconfig_remote dev tun0 table openvpn
# Add Additional devices with static IPs here
ip rule del from 192.168.0.42 table openvpn # Device A IP address

echo --- Tear Down Completed >> ~/vpn_log.txt
```