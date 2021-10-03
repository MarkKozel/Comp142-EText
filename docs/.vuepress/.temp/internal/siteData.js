export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "CS 131 - Computer Organization",
  "description": "Transistors to Assembly - A bottom-up View of Computer Science",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/assets/img/CPU-z-icon.png"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#0000ff"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#0000ff"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
