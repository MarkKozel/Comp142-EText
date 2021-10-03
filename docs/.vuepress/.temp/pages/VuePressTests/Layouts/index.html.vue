<template><p>::: slot PageTitle</p>
<h1 id="frontmatter-title" tabindex="-1"><a class="header-anchor" href="#frontmatter-title" aria-hidden="true">#</a> {{ $frontmatter.title }}</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#introduction-slot">Introduction Slot</RouterLink></li><li><RouterLink to="#key-points-slot">Key Points Slot</RouterLink></li><li><RouterLink to="#lorem-ipsum-dolor-sit-amet">Lorem ipsum dolor sit amet,</RouterLink></li><li><RouterLink to="#duis-aute-irure">Duis aute irure</RouterLink><ul><li><RouterLink to="#excepteur-sint">Excepteur sint</RouterLink></li></ul></li><li><RouterLink to="#review-slot">Review Slot</RouterLink></li><li><RouterLink to="#summary-slot">Summary Slot</RouterLink></li></ul></nav>
<p>:::</p>
<p>::: slot Introduction</p>
<h2 id="introduction-slot" tabindex="-1"><a class="header-anchor" href="#introduction-slot" aria-hidden="true">#</a> Introduction Slot</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
:::</p>
<p>::: slot KeyPoints</p>
<h2 id="key-points-slot" tabindex="-1"><a class="header-anchor" href="#key-points-slot" aria-hidden="true">#</a> Key Points Slot</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
:::</p>
<h2 id="lorem-ipsum-dolor-sit-amet" tabindex="-1"><a class="header-anchor" href="#lorem-ipsum-dolor-sit-amet" aria-hidden="true">#</a> Lorem ipsum dolor sit amet,</h2>
<p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<LC3Instruction opName="Some LC-3 Instruction" :bitPattern="{OpCode:'1010', More: '101010', TheRest:'101010'}" :descriptions="[{OPCode:''},{More:'more bits'},{TheRest:'Final bits'}]"  :examples="['TRAP x23 ; Call IN trap rountine', 'IN ; Call IN trap rountine']"/>
<h2 id="duis-aute-irure" tabindex="-1"><a class="header-anchor" href="#duis-aute-irure" aria-hidden="true">#</a> Duis aute irure</h2>
<p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<QuestionTF question="C's get Degrees" answer='true' rightAnswerFeedback="Technically true, but Bs and As are still better" wrongAnswerFeedback="Although technically incorrect, shooting higher is bound to be better"/>
<h3 id="excepteur-sint" tabindex="-1"><a class="header-anchor" href="#excepteur-sint" aria-hidden="true">#</a> Excepteur sint</h3>
<p>occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<KeyConcepts :ConceptArray= "[
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
<p>::: slot Review</p>
<h2 id="review-slot" tabindex="-1"><a class="header-anchor" href="#review-slot" aria-hidden="true">#</a> Review Slot</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
:::</p>
<p>::: slot Summary</p>
<h2 id="summary-slot" tabindex="-1"><a class="header-anchor" href="#summary-slot" aria-hidden="true">#</a> Summary Slot</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
:::</p>
</template>
