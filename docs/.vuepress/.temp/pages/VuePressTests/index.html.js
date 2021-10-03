export const data = {
  "key": "v-14482378",
  "path": "/VuePressTests/",
  "title": "VuePress Test Resources",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "VuePressTests/index.md",
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
