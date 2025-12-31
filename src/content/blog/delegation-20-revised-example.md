---
title: "Delegation 2.0 (revised)"
description: "Article about Delegation 2.0 (revised)"
pubDate: '2014-09-17'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags:
  - blog
categories: [programming]
---

# Note: This is for Swift 1.0. Not sure if this still works in Swift today.

To supplement my previous post on Delegation (it seems to be a topic that is troublesome especially to those newer to CS). This is primarily to be cleaner and also provide extra notes.

## Protocol

```swift
    protocol DelegatorProtocol {
        func requiredMedthod()
        optional func anotherMethod()
    }

    class TheDelegator {
        var delegate : DelegatorProtocol?
        func useRequiredMethod() {
            self.delegate?.requiredMethod()
        }
    }

    class TheDelegate : DelegatorProtocol {
        func requiredFunction() {
            //Required to implement the function.
        }
    }
```