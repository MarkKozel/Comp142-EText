export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "CS-131 Computer Organization",
    "heroImage": "/images/CPU-Z-icon.png",
    "tagline": "Transistors to Assembly - A Bottom-up View of Computer Science",
    "actionText": "Get Started →",
    "actionLink": "/CourseInfo/",
    "features": [
      {
        "title": "School",
        "details": "Allan Hancock College, Santa Maria, Ca"
      },
      {
        "title": "Discipline",
        "details": "Math Science - Computer Science"
      },
      {
        "title": "Degree / Course of Study",
        "details": "Associate of Arts (AA) -or- Associate in Science for Transfer"
      }
    ],
    "footer": "Mark Kozel (MKozel@HancockCollege.edu) - Allan Hancock College, Santa Maria, Ca"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md",
  "git": {
    "updatedTime": 1632694848000,
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