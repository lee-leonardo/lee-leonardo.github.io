---
layout: post
title: "Typescript implicitly has an 'any' type"
categories: [programming]
tags: [blog, programming, typescript, ts, modules]
excerpt_separator: <!--more-->
---

Sometimes you find a module that typescript will not let you import.
If you cannot find it in npm and in [definitelytyped.org](https://definitelytyped.org/), here's a simple fix:

<!--more-->

## Fix

Declare a file with some naming convention. As multiple of these can be imported, naming them semantically makes sense.

#### external_modules.d.ts
```typescript
declare module "<module name>"
```

#### tsconfig.json
```json
{
    ...
    "include": [
        ...
        "external_modules.d.ts"
    ]
}
```

## Thoughts

- Coupled with multiple different files that relate to categories such as 'external', 'internal', and 'todo' makes sense to me.
- This is just a hack, as you are essentially lying to the ts compiler that these modules are typed... not a good solution long term, especially for maintaining, good for quick hacks and MVP.

## Sources

- https://definitelytyped.org/
- https://medium.com/@steveruiz/using-a-javascript-library-without-type-declarations-in-a-typescript-project-3643490015f3
- https://github.com/microsoft/TypeScript/issues/13348
- https://github.com/microsoft/TypeScript/issues/2709