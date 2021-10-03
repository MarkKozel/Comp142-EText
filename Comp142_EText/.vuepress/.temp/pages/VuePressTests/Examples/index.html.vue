<template><h1 id="examples-section" tabindex="-1"><a class="header-anchor" href="#examples-section" aria-hidden="true">#</a> Examples Section</h1>
<!-- ## MD file from outside (../LC3) folder
[LC-3 Test Page](../LC3/LC3Test.md) -->
<h2 id="page-templates" tabindex="-1"><a class="header-anchor" href="#page-templates" aria-hidden="true">#</a> Page Templates</h2>
<p>This resource is divided into Units
Units contain sections of more specific content (Units)</p>
<p><RouterLink to="/VuePressTests/Examples/templates/0_Unit.html">Unit Template</RouterLink></p>
<p><RouterLink to="/VuePressTests/Examples/templates/1_Section.html">Section Template</RouterLink></p>
<p><RouterLink to="/VuePressTests/Examples/templates/2_Topic.html">Topic Template</RouterLink></p>
<h2 id="code-blocks" tabindex="-1"><a class="header-anchor" href="#code-blocks" aria-hidden="true">#</a> Code Blocks</h2>
<p>Option in default theme</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    <span class="token operator">&lt;</span>code-group<span class="token operator">></span>
      <span class="token operator">&lt;</span>code-block <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">"YARN"</span><span class="token operator">></span>
      ``<span class="token variable"><span class="token variable">`</span><span class="token function">bash</span>
      <span class="token function">yarn</span> create vuepress-site <span class="token punctuation">[</span>optionalDirectoryName<span class="token punctuation">]</span>
      <span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span>
      <span class="token operator">&lt;</span>/code-block<span class="token operator">></span>
      <span class="token operator">&lt;</span>code-block <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">"NPM"</span><span class="token operator">></span>
      <span class="token variable">`</span></span>`<span class="token variable"><span class="token variable">`</span><span class="token function">bash</span>
      npx create-vuepress-site <span class="token punctuation">[</span>optionalDirectoryName<span class="token punctuation">]</span>
      <span class="token variable">`</span></span>``
      <span class="token operator">&lt;</span>/code-block<span class="token operator">></span>
    <span class="token operator">&lt;</span>/code-group<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><code-group>
<code-block title="YARN">
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>
<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>
<h2 id="links-to-other-md-files" tabindex="-1"><a class="header-anchor" href="#links-to-other-md-files" aria-hidden="true">#</a> Links to other .md files</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">one.md</span>](<span class="token url">../one.md</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><RouterLink to="/VuePressTests/one.html">one.md</RouterLink></p>
<p><RouterLink to="/VuePressTests/two.html">two.md</RouterLink></p>
<h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;img src="/images/CourseLogo.png" width="40%" height="40%">
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><img src="/images/CourseLogo.png" width="40%" height="40%">
<h2 id="image-in-markdown" tabindex="-1"><a class="header-anchor" href="#image-in-markdown" aria-hidden="true">#</a> Image in Markdown</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![Alt text](/images/CourseLogo.png)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/CourseLogo.png" alt="Alt text"></p>
<h2 id="text-and-image-in-table" tabindex="-1"><a class="header-anchor" href="#text-and-image-in-table" aria-hidden="true">#</a> Text and Image in Table</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>20%</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">></span></span>Course Logo <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>80%</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/CourseLogo.png<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">max-height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token property">max-width</span><span class="token punctuation">:</span>100%</span><span class="token punctuation">"</span></span></span><span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table>
    <tr>
        <td style="width:20%" >Course Logo </td>
        <td style="width:80%"><img src="/images/CourseLogo.png" style="max-height:100%; max-width:100%"/> </td>
    </tr>
</table>
<h2 id="custom-vue-components" tabindex="-1"><a class="header-anchor" href="#custom-vue-components" aria-hidden="true">#</a> Custom VUE Components</h2>
<p>vue files are in .vuepress\component folder</p>
<h3 id="lc-3-instructions" tabindex="-1"><a class="header-anchor" href="#lc-3-instructions" aria-hidden="true">#</a> LC-3 Instructions</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LC3Instruction</span> <span class="token attr-name">opName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Some LC-3 Instruction<span class="token punctuation">"</span></span> <span class="token attr-name">:bitPattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{OpCode:<span class="token punctuation">'</span>1010<span class="token punctuation">'</span>, More: <span class="token punctuation">'</span>101010<span class="token punctuation">'</span>, TheRest:<span class="token punctuation">'</span>101010<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">:descriptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{OPCode:<span class="token punctuation">'</span><span class="token punctuation">'</span>},{More:<span class="token punctuation">'</span>more bits<span class="token punctuation">'</span>},{TheRest:<span class="token punctuation">'</span>Final bits<span class="token punctuation">'</span>}]<span class="token punctuation">"</span></span>  <span class="token attr-name">:examples</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[<span class="token punctuation">'</span>TRAP x23 ; Call IN trap rountine<span class="token punctuation">'</span>, <span class="token punctuation">'</span>IN ; Call IN trap rountine<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><LC3Instruction opName="Some LC-3 Instruction" :bitPattern="{OpCode:'1010', More: '101010', TheRest:'101010'}" :descriptions="[{OPCode:''},{More:'more bits'},{TheRest:'Final bits'}]"  :examples="['TRAP x23 ; Call IN trap routine', 'IN ; Call IN trap routine']"/>
<h4 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h4>
<ul>
<li><strong>opName</strong>: { String} Title at top of Instruction Box</li>
<li><strong>bitPattern</strong>: { Object } Contains name/bit string pairs for Bit section in table</li>
<li><strong>descriptions</strong>: { Array } Contains individual objects with name/description pairs</li>
<li><strong>examples</strong>: { Array } string elements with 1 or more examples of instruction</li>
</ul>
<h3 id="true-false-inline-questions" tabindex="-1"><a class="header-anchor" href="#true-false-inline-questions" aria-hidden="true">#</a> True/False Inline Questions</h3>
<p>vue files are in .vuepress\component folder</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QuestionTF</span> <span class="token attr-name">question</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">'</span>s get Degrees<span class="token punctuation">"</span></span> <span class="token attr-name">answer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>true<span class="token punctuation">'</span></span> <span class="token attr-name">rightAnswerFeedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Technically true, but Bs and As are still better<span class="token punctuation">"</span></span> <span class="token attr-name">wrongAnswerFeedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Although technically incorrect, shooting higher is bound to be better<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><QuestionTF question="C's get Degrees" answer='true' rightAnswerFeedback="Technically true, but Bs and As are still better" wrongAnswerFeedback="Although technically incorrect, shooting higher is bound to be better"/>
<h3 id="multiple-choice-inline-question" tabindex="-1"><a class="header-anchor" href="#multiple-choice-inline-question" aria-hidden="true">#</a> Multiple Choice Inline Question</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QuestionMC</span> <span class="token attr-name">question</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The best way to get past a problem is...<span class="token punctuation">"</span></span> <span class="token attr-name">answer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>C<span class="token punctuation">'</span></span> <span class="token attr-name">AChoice</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Ignore it<span class="token punctuation">"</span></span> <span class="token attr-name">BChoice</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Deny as long as possible<span class="token punctuation">"</span></span> <span class="token attr-name">CChoice</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Address is directly<span class="token punctuation">"</span></span> <span class="token attr-name">DChoice</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hope tomorrow is better<span class="token punctuation">"</span></span> <span class="token attr-name">rightAnswerFeedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Right! It make make others uncomfortable, but this is better in the long term<span class="token punctuation">"</span></span> <span class="token attr-name">wrongAnswerFeedback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Bandaid Solution!<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><QuestionMC question="The best way to get past a problem is..." answer='C' AChoice="Ignore it" BChoice="Deny as long as possible" CChoice="Address is directly" DChoice="Hope tomorrow is better" rightAnswerFeedback="Right! It make make others uncomfortable, but this is better in the long term" wrongAnswerFeedback="Bandaid Solution!"/>
<h3 id="you-do-it-activity-header" tabindex="-1"><a class="header-anchor" href="#you-do-it-activity-header" aria-hidden="true">#</a> You Do It activity header</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YouDoIt</span> <span class="token attr-name">time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>12</span> <span class="token attr-name">instructions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>follow the white rabbit<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><YouDoIt time=12 instructions="follow the white rabbit"/>
<h3 id="key-concepts" tabindex="-1"><a class="header-anchor" href="#key-concepts" aria-hidden="true">#</a> Key Concepts</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeyConcepts</span> <span class="token attr-name">:ConceptArray</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>[
{
  Concept:<span class="token punctuation">'</span>Natural Language<span class="token punctuation">'</span>,
  Details:<span class="token punctuation">'</span>Spoken and written communication developed and evolved over time, and used by humans<span class="token punctuation">'</span>
},
{
  Concept:<span class="token punctuation">'</span>Ambiguity<span class="token punctuation">'</span>,
  Details:<span class="token punctuation">'</span>Imprecise nature of a construct. For Natural Language, how individuals interprets the meaning or intent of a word or phrase<span class="token punctuation">'</span>
},
{
  Concept:<span class="token punctuation">'</span>Algorithm<span class="token punctuation">'</span>,
  Details:<span class="token punctuation">'</span>In the context of Computer Science, re-writing a Problem in a form that minimizes the Ambiguity of Human/Natural Language<span class="token punctuation">'</span>
}
]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><KeyConcepts :ConceptArray= "[
{
  Concept:'Natural Language',
  Details:'Spoken and written communication developed and evolved over time, and used by humans'
},
{
  Concept:'Ambiguity',
  Details:'Imprecise nature of a construct. For Natural Language, how individuals interprets the meaning or intent of a word or phrase'
},
{
  Concept:'Algorithm',
  Details:'In the context of Computer Science, re-writing a Problem in a form that minimizes the Ambiguity of Human/Natural Language'
}
]" />
<h2 id="vuepress-plugin-container-elements" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-container-elements" aria-hidden="true">#</a> vuepress-plugin-container elements</h2>
<p>see .vuepress/config.js
styles found in .vuepress/styles/index.styl</p>
<p>see <a href="https://vuepress.github.io/en/plugins/container" target="_blank" rel="noopener noreferrer">Plugin Page<OutboundLink/></a></p>
<h3 id="read-more" tabindex="-1"><a class="header-anchor" href="#read-more" aria-hidden="true">#</a> Read More</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: readmore Abstraction Layers
<span class="token url">[<span class="token content">Abstraction Layers in Computer Architecture</span>](<span class="token url">https://en.wikipedia.org/wiki/Abstraction_layer#Computer_architecture</span>)</span>
High-level abstraction of computer architecture
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>::: readmore Abstraction Layers
<a href="https://en.wikipedia.org/wiki/Abstraction_layer#Computer_architecture" target="_blank" rel="noopener noreferrer">Abstraction Layers in Computer Architecture<OutboundLink/></a>
High-level abstraction of computer architecture
:::</p>
<h3 id="think-about-it" tabindex="-1"><a class="header-anchor" href="#think-about-it" aria-hidden="true">#</a> Think About It</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: thinkaboutit Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>::: thinkaboutit Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force
:::</p>
<h3 id="what-s-going-on" tabindex="-1"><a class="header-anchor" href="#what-s-going-on" aria-hidden="true">#</a> What's Going On</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: whatsgoingon
Here's the 411 on the thing, above...
<span class="token list punctuation">1.</span> this
<span class="token list punctuation">1.</span> that
<span class="token list punctuation">1.</span> the other
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>::: whatsgoingon
Here's the 411 on the thing, above...</p>
<ol>
<li>this</li>
<li>that</li>
<li>the other
:::</li>
</ol>
<h3 id="right-container-with-link" tabindex="-1"><a class="header-anchor" href="#right-container-with-link" aria-hidden="true">#</a> Right container (with link)</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: right
From <span class="token url">[<span class="token content">Wikipedia</span>](<span class="token url">https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion</span>)</span>
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>::: right
From <a href="https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" target="_blank" rel="noopener noreferrer">Wikipedia<OutboundLink/></a>
:::</p>
<h3 id="tip" tabindex="-1"><a class="header-anchor" href="#tip" aria-hidden="true">#</a> Tip</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: tip
Tip container of <span class="token code-snippet code keyword">`@vuepress/theme-default`</span>
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Tip container of <code>@vuepress/theme-default</code></p>
</div>
</template>
