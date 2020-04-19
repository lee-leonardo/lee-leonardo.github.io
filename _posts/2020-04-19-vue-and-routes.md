---
layout: post
title: "Typescript and Vue Router relative pathing issue"
categories: [programming]
tags: [blog, programming, vue, vue-router, typescript]
excerpt_separator: <!--more-->
---

Currently the set up with the Vue template for a Typescript has a relative pathing issue. This is a problem generated when initialize a project in `vue ui` or in `vue create <project-name>`.
The fix is relatively easy at first glance, i.e. just don't do the node namespace thing, this messes with Typescript, a known issue from my experience at Expedia. If there's a fix for this (probably simple and requires some googling) I'd probably spend more time looking into it than it saves.

<!--more-->

# Problem

The output looks like this:
```bash

$ npm run build
> vue@0.1.0 build <project-path>
> vue-cli-service build

⠙  Building for production...Starting type checking service...
Using 1 worker with 2048MB memory limit
⠦  Building for production...

ERROR  Failed to compile with 1 errors

This relative module was not found:

* ../views/EvenList.vue in ./src/router/index.ts
 ERROR  Build failed with errors.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vue@0.1.0 build: `vue-cli-service build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vue@0.1.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
...
```

## Quick Fix

Word of warning: This is just to get the project working, at some point you'll probably want to split up the router into separate smaller components and manage it with a namespace, so you're going to have to figure this out eventually.

```bash
# use git mv to save the file history. but essentially move the file
mv <root>/router/index.ts <root>/router.ts
    # if you have other files in there move them as well.
# delete the router folder
rmdir router # safe
rm -d <root>/router #works, but more dangerous
```