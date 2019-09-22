---
layout: post
title: "Introductions and Delegates"
categories: [programming]
tags: [blog, cocoa, ios]
excerpt_separator: <!--more-->
---

## Introductions

Hello World, I am Leonardo Lee. I am a current student at Code Fellows in the iOS Developer Accelerator. To start I'd like to tell you a bit about myself. I graduated last year from the University of Washington Seattle campus with a BA both Philosophy and Comparative Religion. My studies gravitated around both Metaphysics (especially the Mind) of the West and the East. In my studies I learned about things such as modal logic and Turing machines. Both my majors were interesting fields to study, but it was lacking in the jobs and becoming an academic is nearly impossible (and without job security). I initially went with a internship that closely followed with my major, within the internship I capitalized on my experience with digital sound equipment and media from both University and High School. Unfortunately my internship was cut short and from there I decided to pursue programming, a goal that I thought became more feasible with some of the things I learned at my time in the internship. My only experience prior to last year was a bit of BASIC, SuperCollider, and CSE142\. It was during my internship that I was hurtled into learning Javascript to gear up in experimenting with a Node environment hosted on AWS. This was challenging and I was over my head, but I learned that it isn't as difficult as CSE142 makes it sound. After learning from free resources I eventually stumbled upon programming bootcamps, from there I learned about Code Fellows, and from there it has taken me into the programming camp where I am typing about this today.

## Initial Thoughts

My first thoughts on my first two weeks in the Dev Accelerator have been engaging and fun. I have been familiar with parts of it, and other parts seem to be more difficult to first pickup. The biggest part I've learned that one needs to master is the **core design patterns in iOS**. Therefore think for my first set of blog posts I'll do a series on these design patterns and elaborate on my understanding of them.

### Core Design Patterns

*   MVC
*   Delegation
*   Target-Action
*   Closures and Block Syntax

I find that MVC as a model isn't very difficult. What really is challenging to grasp is delegation and closures/blocks, thus this blog post I am going to focus in on Delegation.

## Delegation

In Swift delegation is quite simple. Essentially the protocol generally located above the class, the class that owns of the protocol declares a variable delegate which has an optional type of the protocol. Those who conform to the protocol utilize "destination.delegate = self" to ensure it is the delegate and self.delegate! to access the properties of those who are the delegates of the object itself.

Just to note: Delegation is actually a pattern based off of protocols. In OO programming **protocols** (also known as interfaces, but not to be confused with Objective-C @interfaces) are a means to allow objects to communicate with one another with methods and values. As a concept, inter-object communication is very important for languages that encapsulate code (scope, i.e. namespaces). This differs from other means of communication like reference, because delegations provide methods that allow for mutation and the use of values without necessarily reassigning values. Delegation also differs from inheritance because the objects are fully independent of one another.

### Basic Delegate

    protocol CoolObjectDelegate { func coolThingsHappen(toNice: Person) } class CoolPerson: Person { var delegate: CoolObjectDelegate? } class CoolCommunicator: Person, CoolObjectDelegate { func coolThingsHappen(toNice: Person) { println("Implemented Delegate Method!") } }

## Delegate Chaining

Delegate chaining is what occurs when a delegate is called by a class to pass class down a hierarchy. This gets hairy quickly and is not reccomended for chains longer than 2 classes.

```swift
    protocol AmbassadorDelegate {
        func passTheBuck(variableToPass: String)
    }

    class Ambassador: Person {
        var delegate: AmbassadorDelegate?
        func passingToDelegate(thingToPass: String) {
            self.delegate!.passTheBuck(thingToPass)
        }
    }

    class Governor: Person, AmbassadorDelegate {
        var delegate: AmbassadorDelegate?
        func passTheBuck(thingToPass: String) {
            self.delegate!.passTheBuck(thingToPass)
        }
    }

    class Secretary: Person, AmbassadorDelegate {
        var thingPassed: String func passTheBuck(thingToPass: String) {
            thingPassed = thingToPass
        }
    }
```

I hope from this example it is clear why chaining delegates becomes hairy quickly, and LLVM apparently doesn't enjoy it as well. I was told in class that using NSNotification centers and observers are preferable. I haven't looked deeply into it, but from my reading the reference it seems apparent. In essence decoupling code and creating observers is probably a better design for the code in this kind of situation.

## Mindspace

What helped my understand delegation was actually the late 17th Century Philosopher George Berkeley. Berkeley was his theory of "immaterialism." Today it is known as Subjective Idealism, which is the belief that material existence does not exist, rather it is all perceived in the mind. His theory is considered a critique of abstraction, but bear in mind he is refuting the necessary existence of abstractions such as the classical concepts such as trigonometry and geometry (squares and triangular relationships exist apart from actual objects). His theory posited as facinating metaphysical space where only minds existed. In this space each mind interacted with a 'delegate' (which he referred to as God) that passed the information that caused the perceptions of the material existence. Sounds pretty crazy (not as crazy as solipsism), but I prefer to think that delegates are like usable chunks of code that allow blind and dumb chunks of code to perform marvelous tasks.

## Semi-Related

This is a concept separate from **mixins** (classes that are composed of methods from various other classes, it is good to note that this class does not inherit or have a multiple inheritance) Without a protocol or reference to a value (like a pointer) objects have no proper way of passing information to one another. I stumbled upon them in C#, I haven't really used it but it seems like it would be a interesting alternative to delegate. I thought I'd just throw that out there. If anyone has more information on it I'd like to know.

I bring it up because these are both ways to decouple code and keep information in an object private. Delegation is designed with the object's privacy in mind, without privacy code would becomes more unpredicable as variables named the same could wreak havoc on code. Privacy and namespaces are important for keeping code from tangling each other up as well as making code modular.

## Code Fellows Experience

In the Development Accelerator we have a lot of information thrown at us per day. I am a little concerned at how much of for more specific stuff I'll realistically retain, however the inverse is that it focuses on flexibility and ability to learn from the docs or by experimentation. I believe that those are the skills that set programmers apart from one another rather than just sheer knowledge of a framework or a sole language.