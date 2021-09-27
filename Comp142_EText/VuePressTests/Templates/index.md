# Page Templates

## Unit Pages

Main page for a Unit, which presents an overview of a complex concept, like *binary numbers* or *logic gates*
Units will contain 1 or more [sections](#section-pages) that present more detailed information

```text
---
title: Unit X - SECTION NAME
shorttitle: OVERVIEW DESCRIPTION
tags: []
---

# {{ $frontmatter.title }}

Description of Unit

## [SECTION NAME](LINK TO SECTION)
OVERVIEW OF SECTION

```

## Section Pages

Main page for a Section, which presents more detailed parts of a Unit, like *unsigned binary numbers* or *2's complement*
Sections will contain 1 or more [topics](#topic-pages) that present details information, how-tos, and examples
```text
---
title: Section X - SECTION NAME
shorttitle: OVERVIEW DESCRIPTION
tags: []
---

# {{ $frontmatter.title }}
This section will define the concepts and operations used in modern computer systems

## [UNIT X](LINK TO UNIT FILE)
### UNIT DESCTIPTION
* LIST OF UNIT SECTIONS

```

## Topic Pages

Main page for a Topic, which presents lowest level of detailed parts of a related Section, like *adding 2 unsigned binary strings* or *algorithm for converting to 2's complement*

```text
---
title: SECTION X - TOPIC NAME
description: OVERVIEW DESCRIPTION
tags: []
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
}]" />

## Introduction

## TOPIC X

## TOPIC Y

## Conclusion

```