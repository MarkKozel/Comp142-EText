import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-16d151d2","/CourseInformation/","CS 131 - Computer Organization",["/CourseInformation/index.html","/CourseInformation/index.md"]],
  ["v-442ae796","/EText/","CS-131 Computer Organization EText",["/EText/index.html","/EText/README.md"]],
  ["v-14482378","/VuePressTests/","VuePress Test Resources",["/VuePressTests/index.html","/VuePressTests/index.md"]],
  ["v-60de0c77","/VuePressTests/one.html","Overview - one.md",["/VuePressTests/one","/VuePressTests/one.md"]],
  ["v-556c7851","/VuePressTests/two.html","Overview - two.md",["/VuePressTests/two","/VuePressTests/two.md"]],
  ["v-58e6a06a","/CourseInformation/CourseOrganization/","Course Organization",["/CourseInformation/CourseOrganization/index.html","/CourseInformation/CourseOrganization/index.md"]],
  ["v-193b2a62","/CourseInformation/CourseRational/","Course Rationale",["/CourseInformation/CourseRational/index.html","/CourseInformation/CourseRational/index.md"]],
  ["v-7eb98676","/EText/Foundations/","Foundations",["/EText/Foundations/index.html","/EText/Foundations/README.md"]],
  ["v-0eca6b22","/VuePressTests/Examples/","Examples Section",["/VuePressTests/Examples/index.html","/VuePressTests/Examples/index.md"]],
  ["v-7da33c17","/VuePressTests/Guide/","Guide",["/VuePressTests/Guide/index.html","/VuePressTests/Guide/index.md"]],
  ["v-6fac4960","/VuePressTests/Layouts/importable.html","",["/VuePressTests/Layouts/importable","/VuePressTests/Layouts/importable.md"]],
  ["v-b9c295ac","/VuePressTests/Layouts/","Layout Title from Frontmatter",["/VuePressTests/Layouts/index.html","/VuePressTests/Layouts/index.md"]],
  ["v-e0d52d0c","/VuePressTests/Templates/","Page Templates",["/VuePressTests/Templates/index.html","/VuePressTests/Templates/index.md"]],
  ["v-59c8b27a","/EText/Foundations/DigitalLogicCircuits/","Digital Logic Circuits",["/EText/Foundations/DigitalLogicCircuits/index.html","/EText/Foundations/DigitalLogicCircuits/README.md"]],
  ["v-164339ce","/EText/Foundations/NumberSystems/","Number Systems",["/EText/Foundations/NumberSystems/index.html","/EText/Foundations/NumberSystems/README.md"]],
  ["v-0ace70bf","/EText/Foundations/NumberSystems/binary.html","Number Systems - Binary",["/EText/Foundations/NumberSystems/binary","/EText/Foundations/NumberSystems/binary.md"]],
  ["v-d133c47e","/EText/Foundations/NumberSystems/decimal.html","Number Systems - Decimal",["/EText/Foundations/NumberSystems/decimal","/EText/Foundations/NumberSystems/decimal.md"]],
  ["v-69f6b0e7","/EText/Foundations/NumberSystems/hexadecimal.html","Number Systems - Hexadecimal",["/EText/Foundations/NumberSystems/hexadecimal","/EText/Foundations/NumberSystems/hexadecimal.md"]],
  ["v-1bca1791","/EText/Foundations/Pioneers/","Pioneers",["/EText/Foundations/Pioneers/index.html","/EText/Foundations/Pioneers/README.md"]],
  ["v-634a42f7","/EText/Foundations/Pioneers/Turing.html","Pioneers - Turing",["/EText/Foundations/Pioneers/Turing","/EText/Foundations/Pioneers/Turing.md"]],
  ["v-228b0b7f","/EText/Foundations/Pioneers/shannon.html","Pioneers - Claude Shannon",["/EText/Foundations/Pioneers/shannon","/EText/Foundations/Pioneers/shannon.md"]],
  ["v-024ade2a","/EText/Foundations/Pioneers/vonNeumann.html","Pioneers - John von Nuemann",["/EText/Foundations/Pioneers/vonNeumann","/EText/Foundations/Pioneers/vonNeumann.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
