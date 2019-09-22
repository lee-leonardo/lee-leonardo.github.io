---
layout: post
title: "Adding Stylesheets Dynamically to the DOM"
categories: [programming]
tags: [blog, js]
excerpt_separator: <!--more-->
---

This is a simple trick, but most likely if you require dynamic css, then probably you should look into alternative approaches like inline css or accounting for the css by using classes that are dynamically added.

<!--more-->

In this case I am using javascript that should work for all browsers. There is a newer [CSSStyleSheet api], but it does not work for IE and it requires additional finessing to use the api features. In fact the CSSStyleSheet is a work in progress and currently will only allow one to inspect stylesheet. Not the as simple as creating a element and appending to it (maybe when the specification is finished?).

## Creation

`document.createElement("style")` will create a style node, which then you can edit. With html5, setting a value for `style.type` is not needed. However it might be nice to set the id (`style.id`) so that you have a reference other than in memory to store a reference to the node.

## Styling

Use `style.appendChild` to append text nodes created with `document.createTextNode` to the stylesheet. Once you have the css you need, then append it to the dom.

## To the DOM

Every time you wish to make changes, you will have to append the node to the DOM again using: `document.head.appendChild`.

## Finish!

There’s a quick brief tutorial on how to append style nodes and add styles to them. When the node is added to the dom it will cause a style reload on the dom ensuring that your changes will affect the dom.