---
layout: post
title: "Restoration and getting Sassy"
categories: [programming]
tags: [jekyll, blogging, squarespace, sass]
excerpt_separator: <!--more-->
---

Today I focused on restoring the previous content of my old blogs. They were squarespace blog posts and I downloaded the blog files that Squarespace provides... it's an xml file that is a list of html files... if I wasn't a developer it would be extremely confusing and makes you feel like you don't own your content. I don't understand the decision they took, but it's clear it's a measure to prevent people from leaving the platform.

<!--more-->

I'm going to manually strip out my content and create posts. What I'm doing is taking the files, opening them in chrome, finding the html chunks and pasting them into a new file. The html chunks then are beautified by a IDE which then I'll translate to markdown, using a converter tool. I initially exported these files in markdown... which is a little frustrating to be honest to be translating them back... I wish their system was better. Another annoying thing is that xml files I downloaded only worked for my programming blog, not a big hassle as I stored the other blogs in ulysses, but still really annoying to need to deal with it.

## Sass

I learned Sass before I started my iOS journey as I though that getting a job in web development would be easier. Ironic, how now after a few years of experience, my job is pretty much all web and has no mobile. It makes me really resent working for a large organization as I've given up so muc autonomy for marginal gains.

Back to Sass, I always preferred it over Less which is what we use as Expedia, but I'm not certain on how it works anymore.

## Sass + Jekyll

Jekyll now comes with an internal style sheet generator, it works well with sass files, but doesn't play nicely with sass files importing css (cannibalizing off of someone else's css). Thus I converted the files to Sass. This is a Sass compiler feature where it tries to import css files via url. This is throwing an error in the Sass compiler which is somewhat masked by Jekyll's console logging. I had to primarily figure this out by reading the docs and seeing the procedure in which Sass compiles things.

## Google Fonts

I also worked a bit on the Google fonts aspect of the application. I added two fonts by following their [docs](https://developers.google.com/fonts/docs/getting_started), it's pretty clear.


## Sources

- [Blog post about Sass and Jekyll by Markdotto](https://markdotto.com/2014/09/25/sass-and-jekyll/)