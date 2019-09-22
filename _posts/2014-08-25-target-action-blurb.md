---
layout: post
title: "Target Action Blurb"
categories: [programming]
tags: [ios, swift, cocoa, closures]
excerpt_separator: <!--more-->
---

Hello visitors, I'd like to know what I can do to make my posts better! I'm still trying to fix on a style and format.

## Target-Action

I've decided to postpone a blub on Closures and Blocks until after next week, as a post on network calls and asynchronous processes would be better developed with some more meat alongside a better understanding of
concurrency. I hope to do a little blurb on Go and Objective-C for that post as well. Instead I am going to do a blurb on Target-Action, which I have enjoyed using over Delegation.

For a pragmatic example of how Target-Action is used, they are easy to use for local use in NSNotification center. Target-Actions work because of **selectors** Selectors as an argument is essentially a string, with the method name with an optional semicolon at the end of it (this semicolon is used only if the method takes a parameter). They are coupled with NSNotification center because they allow methods to be executed from various responders (because NSNotification center is one-to-many way of passing information and data). Here's an example of a taget-action funtion.
```swift
    object.targetActionCall(sender: self, selector: "actionMethod:") func actionMethod(sender: AnyObject!) {
        //This is code!
    }
```

## Chunks

It seems weird at reading it, but keep in mind that the target is enacting the object. **Sender** is easy to
understand because it is the sender of the message to the target. _It does not need to be AnyObject_ it can be for example your main ViewController, or your data model as the sender. It is typically written as AnyObject primarily because it allows any object to call the method.

**Target** is object that will respond to the selector. Selectors can only receive one argument, for NSNotificationCenter that would be the NSDictionary that is wrapped around the object.

### Inspiration

To look for real-world examples and frameworks that use target-action, look no further than: NSOperationQueue, NSNotificationCenter, Closure/Blocks.

## Pragma

I've used this liberally in the haiku app idea. It can spread the code base around a lot, making it a bit harder to understand at first glance. I wouldn't say that it is something to discourage you from using the design pattern, because sooner or later as your code needs to be decoupled or modularlized it is going to reach a point where you will need to communicate by Target-Action because coupling your code just won't work.

An example of this would be a container viewcontroller holding a scrollview that holds three view controllers. Sure that you could pass the information you wish by delegation to the container viewcontroller, but to pass data from the container viewcontroller to a child of a child is a bit harder. I understand that the delegation relationship could provide a link, but what if a delegate relationship wouldn't make sense in that space? An example of this would be the architecture of my app: My app consists of a root view controller that has a child scrollview that has three viewcontrollers embedded into it. Two send data to the root (these are easily done by delegation), the third needs to grab data from the root. This cannot be done by delegation (because it isn't possible to have the root's child's child to grab become the delegate of the root).

Thus at some point in your code you'll need to embrace Target-Action.

A great link resource: [NSNotification Center basics](http://www.learnswift.io/?offset=1402943899024)

### Problems

1. The inherent problems with target-action is managing who gets the message. Target-actions with a sender that is AnyObject can be called by anything that implements the corrent selector. A sender can be specified, but this would lose the ability for messages to be flexible and grabbed by multiple different calls.
2. Target-actions can really only have one argument. I do not know for sure is they can return values, at this point
 I believe they only produce side effects.

## Project Week and Conquence

Target-Action was the design pattern I wanted to master during project week. From it I was able to see the strengths and weaknesses of the design pattern. One strength it has it has the potential to modularize functions. This is easily also a con by making it less human readable therefore harder to maintain. It also a good question to ask if making it accessible by selector would actually be helpful. In traditional programming practices, functions are created to either modify existing properties and objects, or by returning a product. Selectors seem to be a gray area not that they return a product, but the synchronous nature of Nofitication center implies that in some cases they'll build an object and return it (or just pass information). I may be missing something because don't have much programming experience, but it makes points out a gray area for me.