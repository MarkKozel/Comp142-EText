export const data = {
  "key": "v-60de0c77",
  "path": "/VuePressTests/one.html",
  "title": "Overview - one.md",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "ONE",
      "slug": "one",
      "children": []
    }
  ],
  "filePathRelative": "VuePressTests/one.md",
  "git": {
    "updatedTime": 1633234937000,
    "contributors": [
      {
        "name": "markkozel",
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
