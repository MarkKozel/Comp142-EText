---
title: Whitespace and Commenting
description: Whitespace and Comments in Software Development
pageType: Topic
tags: [whitespace, comments, tabs, formatting, maintenance]
---

# {{ $frontmatter.title }}

**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Whitespace for easier code review',
  Details:'Indenting and blank lines visually organizes source code to help other developers understand and modify your code'
},
{
  Concept:'Commenting for understandability',
  Details:'Adding comments help others understand important and non-obvious code'
},
]" />

[[toc]]

## Introduction

Use of formatting of source code will make it easier to understand and updates. Including comments adds another level of built-in help for future updates

These elements are your code are purely for humans. Compilers and assemblers ignore these parts of the code when generating the executable. As a result, it will not make the final program any larger

## Whitespace

Using blank section or lines in source code makes it more readable for others. It is a way to visually group and align instructions into understandable groups

[LC-3 Whitespace](../../../LC3/WhitespaceAndCommenting#whitespace) 

### Indenting

Use Space or Tab indents in code shows how code it organized within a construct like a for-loop. It is visually obvious that code indented run inside the loop and code that is not indented is outside

@[code java{2-3}](./javaForLoop.java)

It is visually obvious that each array elements are doubles, the increments by 1 inside the loop


### Blank Lines

Use blank lines to group associate code. This will make it visually easy to see that several line of code exist for some associated purpose

@[code js{1-2,4-9,11-12}](./jsForLoop.js)

The blank lines in this code separate Initialization, Processing Loop, and Output

## Comments

Comments are included to help other developers understand the organization and important parts of the code. This will help simplify future updates

[LC-3 Comments](../../../LC3/WhitespaceAndCommenting#comments) 

### Block Comments

Adding a comment to the beginning of a block can help other developers understand the purpose of group of code

### Inline Comments

Adding a comment to the end of a single line of code helps make clear what the line does. 

### Function Comments

An overall description of the code helps developers understand the big-picture purpose of the program. Block and Inline comments will clarify particular sections

## Conclusion