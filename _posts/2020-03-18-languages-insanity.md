---
layout: post
title: "Languages and Pronounciation"
categories: [language]
tags: [blog, language, esperanto, english, korean]
excerpt_separator: <!--more-->
---

One thing that has been bothering me for a while now is the notion of languages and what makes a language usable.
I'm not talking about programming languages, but indirectly related to programming. I'm talking about languages humans speak.
This directly impact the way we design and communicate language in code, however so I thought it'd be a good topic to explore my thoughts on personally.

<!--more-->

## English. Wat.

Eveyone know the inconsistencies in English and the reliance on punctutation, and context to actually make sense of written text, for example: If I say the the sentence "to letters for C." Process and think through this sonically. From a contextual perspective letters could mean actually characters of text, a letter for someone (i.e. paper with text), it could be some random gangster lingo for bloodletter i.e. some type of violence inducing person.

Sonically these sound similar,
- To
- Too
- Two
- For
- Fore
- Four
- C
- See
- Sea

We can rule out the word 'too' in this scenario, but the sentence sonically could be interpreted as "two letters foresee," now this doesn't make much sense on it's own, but add a soft consonant at the end, the kind that's hard to hear in a loud room: n, d, ing. "two letters forseen...," "two letters four seas," the interpretations and external context make the difference. This is't a knock on English, but just demonstrates that the language itself cannot communicate meaning without context, otherwise we couldn't have euphemisms.

Now to take a quick dive into words pronounciation, say them sonically:

- Prescription
- Purpose
- Pronoun
- Prescience
- Precociousness
- Prelude
- Preoccupied
- Preconceive
- Precedence
- Prefix
- Prefunctory

The demonstrates the inconsistency of the sounds of even Latin prefixes in English. I don't want to get into suffixes, but you get the idea that word modifiers are used and sound inconsistently.

## What is the point

So my thoughts on this are primarily around how expensive and lucrative learning English is. Sure there is lots of free tools such as youtube and etc. that people can use , but the most effective methods are still total immersion. Either by paying significant money to port yourself over to another country and immerse yourself, or pay someone to take time out of their lives to force you to use there language.

This is an expense on a global scale, [in older stats from 2002](https://www.languageonthemove.com/language-costs/), the government of Korea spent 12 billion on English education. That plus the 13 billion spent of private English classes. That is money that could be used to solve world hunger and cure AIDs, but rather due to competition in a privileged market, the funding is used in an effort to level the playing field.

Most languages attempt to be consistent in either syntax, tense, or by word construction, for example Russian tenses apply to all the words in the sentence not just the the verb or the subject in other languages. This makes sentence construction extremely confusing for someone not accustomed to a language, and since the approaches of languages shape the ways of thinking this is important to understand.

## What can be done about this nightmare...

There are some languages, such as Esperanto that are designed in mind to be universal and are artificially created to provide a break from the linguistic nightmare that modern natural languages are. By universal however it comes with a pieces of baggage. For example, Esperanto still uses the Latin Alphabet, which is used in 131 sovereign states (global total being 205 sovereign states), thus about 63% of the worlds sovereign states officially use the alphabet, as an aside 12 other use it as a co-script (meaning the letters are used to represent a Romanized version of their language), so you can say 69% could use a form of Latin script, but not solely. The Latin alphabet comes with some additional baggage, for example it requires modifiers to represent sounds that do not fit nicely within the framework of a language that adopted it's script, common examples are the ø character which is used commonly in Danish, Norwegian, and Faoroese as open or closed mid front rounded vowel. If that wasn't confusing enough, Southern Sami which is a language in Sweden and Norway use it to represent an oe dipthong, can you guess that that means? I can't, even if I could, it doesn't mean I understand how to pronounce the vowel.

Aside from the alphabet there are other biases associated with Esperanto, one can consider to be Portuguese with a more consistent grammar, syntax, and vocabulary. New words are added by dictate in conventions and a democratic process, not a bad process, better than memes, but also doesn't supplant bias. I really like Esperanto and the basics of the language are so easy that you are able to pick up the syntax within a single session if you are very familiar with any SAVT (Subject Adjective Verb Tense) language or Romance language.

My personal preference is towards the Korean script, but that has issues in and of itself, not to mention a tinge of nationalistic bias, the language provides characters that produce sounds, but convention and consistency has lead to some really interesting decisions that I don't think anything but an artificial break, such as Esperanto could fix. The language doesn't have all the sonic combinations for consonants, but does a good job handle most vowel sounds. I can see with a few modifications it could be a good script that provides a universal form of communication. In terms of textual space complexity, Korean is fairly succinct, and compares nicely with other scripts such as Chinese or Japanese. Taking the Gettysburg address as an example, it takes 462 English words, 121 Chinese, 202 Japanese with Kanji, and 220 Korean. The trick to Chinese and Japanese is the fact that the characters are ideographic rather than phonetic, meaning the sonic characteristics of the language are frankly quite arbitrary to the characters themselves rather the meaning is focused on either a pictographic or idea based origin. Korean is considered phonetic in the case (but can also use Hanja to increase efficiency too). So although from a word count Chinese and Japanese beat Korean, from a learning standpoint due to the Korean language still wins out. In fact I would love to do an experiment of using the Korean alphabet to create an more efficient and compact version of Esperanto.

From a vocabulary perspective English takes about 5.1 characters per word, whereas Chinese takes on average 2. In terms of phonetic capacity Chinese and Japanese with their more ideagraphic language counterparts (meaning excluding Hiragana and Katakana), the compactness of Chinese and Japanese exceed that of Korean. However if you do split up the Japanese characters to Japanese specific characters I would not doubt the Gettysburg address exceeds Korean, this is due to the borrowing of Kanji, if you did use Hanja (the Korean equivalent) in Korean, the space compactness would be similar.

For a simple primer on Korean, the shapes of the vowels and consonants are designed to mimic the same of the mouth while your sounding it, sounds promising right? Anatomically it's a bit trickier, but the idea of a consistent visual on how to sound a syllable is a cool idea. There are two problems however, the handling of end consonants to a word (it's guess work in English, so a step up from that), defers to the second sound when two difference consonants are in play. So as an example 닭, the Korean work for Chicken/Hen, is pronounced dak, even though the romanized spelling and consonant order is dark, r being a combination of r and l, an easy fix for the alphabet. The hidden consonant is required for reading and the context is still required to understand the usage.

## How it affects code

Albeit the merits of Korean and asian languages, meaning less space, paper, time is used in writing. It still has technical issues, for example there is no ASCII support for asian language, and rather it is supported by newer standards such as UTF-8. This isn't a problem as the world and the web is moving more and more towards unicode, but this is a problem when you think about language and meaning when it comes to coding in those language.

Imagine not being able to write a comment in an ASCII only language such as C. Sure you can use the romanized letters, but that's not the same, sub-optimal at best. I see this as an even worse case for languages that modify the latin alphabet. This is a small iniquity, but one that probably a factor that contributed to the lack of tecnological advancement in certain regions.

Also from a code perspective, the space cost of storing asian characters is about 3 times the amount of English. Take the Gettysburg address example again:
121 Chinese character into bytes then is 363 bytes, in English it is still 462 bytes, the gap has shrunk, because the language standard was written by a someone of European descent. To compare phonetic alphabets to be a more apples-to-apples comparison it is 660 Korean character bytes to 462 character bytes of English.

# Sources

- [Freakonomics](https://freakonomics.com/podcast/why-learn-esperanto-special-feature/)
- [Stats on Language Compactness](https://qz.com/1088290/in-japanese-chinese-and-korean-140-characters-for-twitter-twtr-is-plenty-thank-you/)
- Leaning Korean growing up, Japanese in school, learning Kanji (Chinese ideographs used in Japanese) as well.