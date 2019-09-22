---
layout: post
title: "Auto layout tips"
categories: [programming]
tags: [cocoa, ios, mindset]
excerpt_separator: <!--more-->
---

My classmates have been having some problems with Autolayout, so I decided to write an article that will help them (and any other who'd stumble upon this blog).

The way I like seeing how to use Autolayout is best described as using simple logical principles to build up a layout. Thus here's a few modal principles that I believe will help anyone grasp autolayout.

<!--more-->

## Basic Vocab

Not exactly related, but a good reference because they'll affect how things are drawn in the loading of the app.

*   Origin — Where the object is drawn from. CGRects are drawn from the top left corner, and drawn clock-wise.
*   Frame — Where the object is located in the main view (or its parent view).
*   Bounds — The location of the object's own origin within itself. This can be used to move child objects within the parents objects bounds by setting a new origin (0,0 is top-left corner).

Basics on the buttons on the bottom right of the storyboard.

1.  |# **Align**: Treat this like a two-dimensional text align for storyboard objects. Each of these tools works with two+ different View objects. These build relationships between objects based on their location in space.
2.  |-[]-| **Pin**: These constraints act like size constraints, margins and snap-features.This is your most powerful tool.
3.  |-^-| **Resolve**: This is a last resort for your nightmare, avoid unless you really want to not think about it atm. The nicest feature is that you can clear constraints for a single object. This is easy to abuse and uncaringly will rid of all your progress.
4.  [[] ] **Resizing Behavior**: Inception, how your views constraints affects its relationship. The default is probably the only setting you will use.

## Mind State:

1.  **For every Window/View, there needs to be a focus.** _Try to create one object in your ViewController that will 'anchor' for the rest of the objects in that ViewController._ This is important because if all your other views are relationally based, they will all conform based on it location (giving you much control in the chaos).
2.  **The magic number is 8.** Multiples of 8 work really well especially when providing space between things. 600 points (the points width in the wAny hAny view) divided by 8 is 75\. 75 divided by 3 is 25\. If you haven't caught on, the [Rule Of Thirds](http://en.wikipedia.org/wiki/Rule_of_thirds) is in order. 320 (divided by 8 is 40) and 480 (divided by 8 is 60) are also wonderful numbers to divide your space.
3.  **Inspect for specificity.** The inspector can be used for another level of granularity, all the constraints you set in the Pin menu can be further customized there.
4.  **General (wAny hAny) before specificity**. It'll save you time in the long run, furthermore since the inspector will allow you to even uninstall parts for the view, it's good to have a basic layout especially when new devices with various sizes get surprise revealed.

## For Sanity's sake

1.  **For UIImageViews do not use the 'greater than,'** infact set either set width/height for them or just have the other elements 'bully' them. Combining both leads to headaches in launch.
2.  **Toolbars will make your life easier.** Flush them to the bottom (what I mean by that is pin the left, bottom, and right to the window and center it with a horizontal alignment). _They can help keep your buttons on screen_ (without assigning a height property to them) and they have flexible relational spacers for their buttons (not to mention easy access to Apple Button icons).
3.  **The yellow is your friend or red needs to be approached with caution.** Be patient with it, by changing constraints you can upset the storyboard. _Yellow is useful because it means you need to define the object more clearly,_ it also doesn't want to push you into doing something stupid. Red however can help you understand, it gives mostly terrible suggestions.
4.  **Focus on troublemakers.** Along my advice not to take the red's suggestions rather _use it to modify your constraints or find the troublemakers_ and figure out a better way to handle it.
5.  **Pin to top or bottom.** By this I mean UI Elements that do not have variable size. If it is variable in size, use another element to corral it into civil behavior.

## Personal Update

The Development Accelerator has been a wild ride. I feel like I need to sleep on my computer to soak up all that we are learning. I am very glad to know we are in such capable hands. Tomorrow I am getting personal resume help, and knowing that soon I'll be working on interviewing has given me confidence that the rewards outweigh the risk.

Also we are in personal project week, I feel already super empowered, and we are working in pairs to help each other not stay stuck. Its also great for learning!

Sorry if I babble, I'm used to having 30-90 pages of reading to write specific 15 page essays on, so chunky text is quite common to me.