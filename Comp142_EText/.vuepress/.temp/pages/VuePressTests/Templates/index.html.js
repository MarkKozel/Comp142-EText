export const data = {
  "key": "v-e0d52d0c",
  "path": "/VuePressTests/Templates/",
  "title": "Page Templates",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Unit Pages",
      "slug": "unit-pages",
      "children": []
    },
    {
      "level": 2,
      "title": "Section Pages",
      "slug": "section-pages",
      "children": []
    },
    {
      "level": 2,
      "title": "Topic Pages",
      "slug": "topic-pages",
      "children": []
    }
  ],
  "filePathRelative": "VuePressTests/Templates/index.md",
  "git": {
    "updatedTime": 1633234937000,
    "contributors": [
      {
        "name": "markkozel",
        "email": "development@markkozel.net",
        "commits": 2
      },
      {
        "name": "Mark Kozel",
        "email": "development@markkozel.net",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
