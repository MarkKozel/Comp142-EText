<template><h1 id="page-templates" tabindex="-1"><a class="header-anchor" href="#page-templates" aria-hidden="true">#</a> Page Templates</h1>
<h2 id="unit-pages" tabindex="-1"><a class="header-anchor" href="#unit-pages" aria-hidden="true">#</a> Unit Pages</h2>
<p>Main page for a Unit, which presents an overview of a complex concept, like <em>binary numbers</em> or <em>logic gates</em>
Units will contain 1 or more <a href="#section-pages">sections</a> that present more detailed information</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
title: Unit X - SECTION NAME
shorttitle: OVERVIEW DESCRIPTION
tags: []
---

# {{ $frontmatter.title }}
#### {{ $frontmatter.shorttitle }}

Description of Unit

## [SECTION NAME](LINK TO SECTION)
OVERVIEW OF SECTION

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="section-pages" tabindex="-1"><a class="header-anchor" href="#section-pages" aria-hidden="true">#</a> Section Pages</h2>
<p>Main page for a Section, which presents more detailed parts of a Unit, like <em>unsigned binary numbers</em> or <em>2's complement</em>
Sections will contain 1 or more <a href="#topic-pages">topics</a> that present details information, how-tos, and examples</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
title: SECTION NAME
shorttitle: OVERVIEW DESCRIPTION
tags: []
---

# {{ $frontmatter.title }}
## {{ $frontmatter.shorttitle }}

This section will define the concepts and operations used in modern computer systems

## [UNIT X](LINK TO UNIT FILE)
### UNIT DESCTIPTION
* LIST OF UNIT SECTIONS

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="topic-pages" tabindex="-1"><a class="header-anchor" href="#topic-pages" aria-hidden="true">#</a> Topic Pages</h2>
<p>Main page for a Topic, which presents lowest level of detailed parts of a related Section, like <em>adding 2 unsigned binary strings</em> or <em>algorithm for converting to 2's complement</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
title: SECTION - TOPIC
description: OVERVIEW DESCRIPTION
tags: []
---

# {{ $frontmatter.title }}

#### {{ $frontmatter.description }}

&lt;KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
}]" />

## Introduction

## TOPIC X

## TOPIC Y

## Conclusion

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></template>
