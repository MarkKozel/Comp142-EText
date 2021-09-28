
module.exports = {
  title: "CS 131 - Computer Organization",
  description: "Transistors to Assembly - A bottom-up View of Computer Science",

  /**
 * Extra tags to be injected to the page HTML `<head>`
 */
  head: [
    ['link', { rel: 'icon', href: '/assets/img/CPU-z-icon.png' }],
    ['meta', { name: 'theme-color', content: '#0000ff' }],
    ['meta', { name: 'theme-color', content: '#0000ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    logo: '/images/CourseLogo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [ //Navigation at the top of the page
      { text: 'Course Info', link: '/CourseInfo/', },
      { text: 'Test', link: '/VuePressTests/' },
    ],
  },
  // displayAllHeaders: true, //display all header links for every page
  sidebar: {
    '/VuePressTests/': [
      '',
      {
        title: 'Examples Page',
        path: 'Examples/',
        collapsable: true,
        sidebarDepth: 3,
      },
      {
        title: 'Layouts Page',
        path: 'Layouts/',
        collapsable: true,
        sidebarDepth: 3,
      },
      {
        title: 'Templates Page',
        path: 'Templates/',
        collapsable: true,
        sidebarDepth: 3,
      },
      {
        title: 'Guide Page',
        path: 'Guide/',
        collapsable: true,
        sidebarDepth: 3,
      },
    ],
    //fallback
    '/': [
      '/CourseInfo/',

    ]
  },

  markdown: {
    code: {
      lineNumbers: true,
    }
  },


  plugins: [
    'demo-code', {
      jsLibs: [
        // umd
        'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
      ],
      cssLibs: [
        'https://unpkg.com/animate.css@3.7.0/animate.min.css',
      ],
      showText: 'show code',
      hideText: 'hide',
      styleStr: 'text-decoration: underline;',
      minHeight: 200,
      onlineBtns: {
        codepen: false,
        jsfiddle: false,
        codesandbox: false,
      },
      codesandbox: {
        deps: { 'lodash': 'latest' },
        json: '',
        query: '',
        embed: '',
      },
      demoCodeMark: 'demo-code',
      copyOptions: { align: 'top', selector: '.demo-and-code-wrapper div[class*="language-"] pre', successText: "copied", staticIcon: true },
    },
    // ],
    "vuepress-plugin-copyright",
    {
      noCopy: true, // the selected text will be non-copyable
      minLength: 40, // if its length is greater than 100
      authorName:
        "Mark Kozel. This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License",
      clipboardComponent: "../components/ClipboardComponent.vue",
    },
    "@vuepress/back-to-top",

    [
      "vuepress-plugin-container",
      {
        type: "readmore",
        before: (info) =>
          `<div class="readmore">
            <p class="readmoretitle">Read More: <em> ${info}</em></p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "left",
        defaultTitle: "",
      },
    ],

    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: "",
      },
    ],

    ["vuepress-plugin-container",
      {
        type: "thinkaboutit",
        before: info => `<div class="thinkaboutit"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],

    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: "Tip",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "whatsgoingon",
        before: (info) =>
          `<div class="thinkaboutit"><p class="title">What's Going On</p>`,
        after: "</div>",
      },
    ],
    ['@vuepress/plugin-nprogress'],
    ['@vuepress/active-header-links'],
  ],
}