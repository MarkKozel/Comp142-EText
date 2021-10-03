export const data = {
  "key": "v-1bca1791",
  "path": "/EText/Foundations/Pioneers/",
  "title": "Pioneers",
  "lang": "en-US",
  "frontmatter": {
    "title": "Pioneers",
    "shorttitle": "People and events that shaped the modern computer",
    "tags": []
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "{{ $frontmatter.shorttitle }}",
      "slug": "frontmatter-shorttitle",
      "children": []
    },
    {
      "level": 2,
      "title": "Alan Turing",
      "slug": "alan-turing",
      "children": [
        {
          "level": 3,
          "title": "Theories and Influence of Alan Turing",
          "slug": "theories-and-influence-of-alan-turing",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "John von Nuemann",
      "slug": "john-von-nuemann",
      "children": [
        {
          "level": 3,
          "title": "Theories and Influence of Alan Turing",
          "slug": "theories-and-influence-of-alan-turing-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Claude Shannon",
      "slug": "claude-shannon",
      "children": [
        {
          "level": 3,
          "title": "The use of binary as the default number system",
          "slug": "the-use-of-binary-as-the-default-number-system",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "EText/Foundations/Pioneers/README.md",
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
