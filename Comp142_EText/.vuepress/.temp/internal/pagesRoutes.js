import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-7fff20be","/CourseInfo/CourseOrganization.html","Course Organization",["/CourseInfo/CourseOrganization","/CourseInfo/CourseOrganization.md"]],
  ["v-8c5b54ba","/CourseInfo/CourseRational.html","Course Rationale",["/CourseInfo/CourseRational","/CourseInfo/CourseRational.md"]],
  ["v-e01ceda6","/CourseInfo/","CS 131 - Computer Organization",["/CourseInfo/index.html","/CourseInfo/index.md"]],
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
