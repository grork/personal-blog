---
title: "Simple Git Secrets"
description: "Apps have secrets, and you don't want to accidentally put them in git. Lets try a simple approach"
tags: [ "git", "opinions" ]
---
There are lots of [solutions](https://aws.amazon.com/secrets-manager/), [guides](https://docs.github.com/en/actions/security-guides/encrypted-secrets), and [services](https://azure.microsoft.com/en-us/services/key-vault/) that help you manage your secrets in a professional, secure manner. These are **absolutely** the type of solution you want for your production environment.

But I’m not building services. I’m building [client apps](https://storyvoid.app) that deploy as a self-contained package. Sometimes, I’m just offering some [Open Source](https://github.com/grork/MixpanelClient) that I include tests for, but that call a real service that needs API keys.

In both of those cases there are two constraints that matter to *me*:
1. Minimal management & setup for *me*
2. Let people manage *their own* secrets

> My tactical solution isn’t magic, nor is it relevant for many services, where solutions at the top are much better suited. **But** it’s free and works well for my use cases (aka client apps that I open source).
{: .post-note}

### tl;dr
1. Create a *template* file that is present in the repo, but not in a path that it would be included in compilation
2. Add the location of where it *will* be included in compilation to `.gitignore`
3. Reference that location in your build.
    1. Be smart: Include an existence check with a friendly error message! This will identify issues quickly.
4. Add details to your `README.md` telling people how to get keys & place the completed file in the right location

# Preparing the way
## Create a template
Firstly, we need a mechanism for representing the secrets to the consumers in your apps. e.g., offer programmatic way to access them. In *my* use case, it’s a file offering static members that represent the keys:
```ts
module Codevoid.Storyvoid {
    // Instapaper Tokens. Replace with tokens & IDs
    // that are issued to you for Instapapers developer
    // access: https://www.instapaper.com/main/request_oauth_consumer_token
    export var INSTAPAPER_CLIENT_ID: string = "PLACEHOLDER";
    export var INSTAPAPER_CLIENT_SECRET: string = "PLACEHOLDER";
    export var MIXPANEL_KEY: string = "PLACEHOLDER";
}
```
(https://github.com/grork/StoryvoidWWA/blob/main/App_Keys_Template.ts)

You can do this in any language, store them in a text file leveraged during build process, or read at runtime. It’s your choice!

> Note, the *values* here are `PLACEHOLDER`. This is absolutely the point & intention — **do not** put your **actual** keys here. That would, you know, defeat the purpose.
{: .post-note}

You may be tempted to place this in your repo at the location that you will directly consume it — don’t do that! You *don’t* want this *template* file to be included in your compilation / build phase since it’s just a template.

## Decide a location & `.gitignore` that location
To prevent people accidentally committing the filled-out template, you need to add the location of the filled-out file to your `.gitignore` file. This is what prevents the file from being committed to the repo. In my use case, I had two locations for keys `app/keys.ts` and `test/keys.ts`. I added these [into my](https://github.com/grork/StoryvoidWWA/blob/main/.gitignore#L295) `.gitignore`:
```
app/keys.ts
test/keys.ts
```

Now knuckleheads like myself don’t accidentally commit the file when they’ve filled it out (As I kept doing with an earlier iteration of this pattern).

# Helping people succeed
Now that you’ve got things prepared, you need to help people fall into a pit of success. You don’t want weird runtime errors when the template hasn’t been filled out — you want to know ASAP that something ain't right.

## Add details to your `README.md`
You have a `README.md` which you’ve already written super clear instructions on building-and-running. Keys without question make it less open-and-go, but you can still make it feel obvious.

Write whatever steps or details are required to obtain keys, where to place the files etc. in your `README.md`. You can see an example [here](https://github.com/grork/StoryvoidWWA#building-using--running).

## Fail quickly, and clearly
Depending on your build & packaging system, there are many ways to achieve this. The general pattern is:
1. Check file exists
2. If it doesn’t exist fail the compilation/build/package with a **clear** error message

In my use case, it’s within a MSBuild project, which makes for easy declarative syntax for these situations:
```
<!--
Don't let people get confused with missing class names, error early if the
API key file is missing
-->
<Target Name="CheckKeyFilePresent" BeforeTargets="BeforeBuild">
  <Error Condition="!Exists('$(MSBuildProjectDirectory)\keys.ts')"
         Text="Please create a Keys.ts in $(MSBuildProjectDirectory). See README.md for more details" />
</Target>
```
No surprises!

For node, you can use the `:pre` suffix in your `package.json` `scripts` section to check if a [file exists](https://stackoverflow.com/questions/69306549/check-file-exists-before-launch-it-in-webpack-npm-scripts).

# Wrapping up
Simple! [Cheap-as-chips](https://www.urbandictionary.com/define.php?term=cheap%20as%20chips).

To reiterate, this is a *simple* solution for constrained scenarios. If you have a real service, and production tooling absolutely use a mission-critical service such as Azure Vault.