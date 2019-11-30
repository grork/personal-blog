---
title: FileDeduper
tags: ["tools", "programming", "personal" ]
---
Why I wrote a tool to find duplicate files (by MD5-hash)

I’ve authored a tool called FileDeduper, which scavenges a file system,
MD5-hashes all the files, and then moves all the duplicates to a destination
directory keeping the original tree structure. The intent with “move” rather
than “delete” was to keep data rather than accidently delete it. Sure, the MD5
hash should mean this isn’t a risk, but you know, safety first.

The dataset that spurred me to write this tool was 2TB, with ~5.3 million files.
Here are some interesting performance stats:  
- Time to discover the files: 21min (3min 40s if file system was cached)
- Time to hash all the files: 15hrs 37min
- Duplicates found: 1.5 millon
- Time to “move” 1.5million duplicates: 15hrs
- Peak Memory usage: 4gb
- Tool is here, and I hope someone other than me finds it useful one day.

## Why

About a year ago, my dad passed away, and in the process of clearing out his
things, I realized that one of the important things to make sure I got, was a
copy of all of his digital files. Sure where reams of physical documents too,
and as my brother & I sorted that all out we found lots of interesting things.
But I knew that just as he kept meticulous copies of his physical paper, he did the same with his digital documents & data.

So, while I was there, I made a backup of all of his local digital data to a 2TB
portable USB drive, which it completely filled. I wasn’t sure what to do with
2TB of data, but I knew I wasn’t ready to start pulling it apart.

When I finally felt able to take a look at the drive a few months later, I
realized how much there was, and he’d been using one of his drives “backup” for
a set of automated backups. This meant regular snapshots of 1000s of the files
(many unchanged). This left me with the challenge of working out what the unique
set of files that contained the real data.

Being the software peep that I am, I concluded the answer was to write some
software…