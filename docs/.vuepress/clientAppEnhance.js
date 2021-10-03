import { defineClientAppEnhance } from '@vuepress/client'

// import Definitions from './components/Definitions.vue';
import KeyConcepts from './components/KeyConcepts.vue';
import LC3Instruction from './components/LC3Instruction.vue';
import QuestionMC from './components/QuestionMC.vue';
import QuestionTF from './components/QuestionTF.vue';
import YouDoIt from './components/YouDoIt.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // app.component('Definitions', Definitions);
  app.component('KeyConcepts', KeyConcepts);
  app.component('LC3Instruction', LC3Instruction);
  app.component('QuestionMC', QuestionMC);
  app.component('QuestionTF', QuestionTF);
  app.component('YouDoIt', YouDoIt);
})
