---
layout: post
title: "Building Cocoa Touch Dynamic Frameworks in iOS8"
categories: [programming]
tags: [blog]
excerpt_separator: <!--more-->
---

# Note: This is for Swift 1.0

One of the features that seemed to be less emphasized due to the impact of swift is the addition of Dynamic Frameworks to iOS 8\. They pretty implemented the features that it seems OSX has so its old hat news in terms of a feature to Cocoa, but the support for it on iOS has a few nuances.

<!--more-->

1.  Frameworks being NSBundles allow you to package up the code and securely share your code without being as vulnerable to plagiarism.
2.  Frameworks are embedded into the app sandbox. Meaning unless the framework is stored externally to the app sandbox, apps cannot share the same framework. This means that each app on a device that uses a framework will have it's own copy of it unless your coordinate to have it stored as a shared resource somehow.
3.  Frameworks store previous versions of the framework, impacting its size and performance with each update.
4.  Place headers within the framework! You do not really do this for static libraries, but for frameworks it does matter.

## Getting the Ball Rolling

A lot of tutorials have you start by building a static library and then build dependencies from there, these tutorials are good and I'd rather not plagiarize the nuances of the header settings (meaning: public/private/project) from them.

I would suggest building the framework from a project that you'd like to package files from.

1.  New > Target > Framework & Library > Framework
2.  The prefix does matter as it will affect the Bundle Identifier.
3.  Versions also matter as it will affect the size of the framework (this is only after you release it as a bundle).

## Hierarchy

I'm going to place more information on hierarchies once I figure it out :).

### Resources

- [Ray's Tutorial here](http://www.raywenderlich.com/65964/create-a-framework-for-ios)