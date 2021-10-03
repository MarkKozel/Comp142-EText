export const themeData = {
  "logo": "/images/CourseLogo.png",
  "repo": "",
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": true,
  "navbar": [
    {
      "text": "Course Info",
      "children": [
        {
          "text": "Info",
          "link": "/CourseInformation/"
        },
        {
          "text": "Rational",
          "link": "/CourseInformation/CourseRational/"
        },
        {
          "text": "Organization",
          "link": "/CourseInformation/CourseOrganization/"
        }
      ]
    },
    {
      "text": "EText",
      "link": "/EText/"
    },
    {
      "text": "Test",
      "link": "/VuePressTests/",
      "target": "_blank"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
