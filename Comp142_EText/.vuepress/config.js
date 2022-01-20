// const path = require('path');
// const shiki = require("@vuepress/plugin-shiki");
// const fs = require('fs')

//Get LC3 language syntax for code fencing
// const lc3asm = JSON.parse(fs.readFileSync(path.join(__dirname, './langSyntax/lcasm.tmLanguage.json')));

module.exports = {
  port: 8081,
  title: "CS 131 - Computer Organization",
  description: "Transistors to Assembly - A bottom-up View of Computer Science",
  cache: false,

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
    editLinkText: '',
    lastUpdated: true,
    // nav: [ //Navigation at the top of the page 1.8.2
    //   { text: 'Course Info', link: '/CourseInformation/', },
    //   { text: 'EText', link: '/EText/', },
    //   { text: 'Test', link: '/VuePressTests/', target: '_blank' },
    // ],
    // navbar: [ //Navigation at the top of the page
    nav: [ //Navigation at the top of the page
      // { text: 'Course Info', link: '/CourseInformation/', },
      {
        text: 'Course Info',
        // children: [
        items: [
          {
            text: "Info",
            link: '/CourseInformation/'
          },
          {
            text: "Rational",
            link: '/CourseInformation/CourseRational/'
          },
          {
            text: "Organization",
            link: '/CourseInformation/CourseOrganization/'
          },
        ]
      },
      // { text: 'EText', link: '/EText/', },
      {
        text: 'EText',
        // children: [
        items: [
          { text: "Table Of Contents", link: '/EText/', target: '_blank' },
          { text: "  Intro", link: '/EText/Introduction/', target: '_blank' },
          { text: "  Foundations", link: '/EText/Foundations/', target: '_blank' },
          { text: "  Number Systems", link: '/EText/NumberSystems/', target: '_blank' },
          { text: "  Assembly Programming'", link: '/EText/AssemblyProgramming/', target: '_blank' },
        ]
      },
      {
        text: 'Test',
        items: [
          { text: "Test Page", link: '/VuePressTests/', target: '_blank' },
          { text: "Examples", link: '/VuePressTests/Examples/', target: '_blank' },
          { text: "Layouts", link: '/VuePressTests/Layouts/', target: '_blank' },
          { text: "Templates", link: '/VuePressTests/Templates/', target: '_blank' },
        ],
      }
    ],
  },
  // displayAllHeaders: true, //display all header links for every page

  // sidebar: 'auto',
  sidebar: {
    '/EText/Foundations/': [
      '',
      'History',
      'Pioneers'
    ],
    '/EText/NumberSystems/': [
      '',
      'DecimalValues',
      'BinaryValues',
      'HexadecimalValues',
    ],
    'EText/AssemblyProgramming/': [
      '',
      'Development',
      'ProgramFlow'
    ],
    '/EText/': [
      '/' //Fallback
    ]
  },


  markdown: {
    code: {
      lineNumbers: true,
    }
  },

  plugins: [

    // ['@vuepress/container', {
    //   type: 'col-wrapper',
    //   defaultTitle: '',
    // }],
    // ['@vuepress/container', {
    //   type: 'col-full',
    //   defaultTitle: '',
    // }],
    // ['@vuepress/container', {
    //   type: 'col-half',
    //   defaultTitle: '',
    // }],
    // ['@vuepress/container', {
    //   type: 'col-third',
    //   defaultTitle: '',
    // }],

    // '@vuepress/plugin-shiki', {
    //   theme: 'nord',
    //   langs: ['java', 'javascript', lc3asm]
    // },

    // '@vuepress/register-components',
    // {
    //   componentsDir: path.join(__dirname, './components'),
    // },

    // 'demo-code', {
    //   jsLibs: [
    //     // umd
    //     'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
    //   ],
    //   cssLibs: [
    //     'https://unpkg.com/animate.css@3.7.0/animate.min.css',
    //   ],
    //   showText: 'show code',
    //   hideText: 'hide',
    //   styleStr: 'text-decoration: underline;',
    //   minHeight: 200,
    //   onlineBtns: {
    //     codepen: false,
    //     jsfiddle: false,
    //     codesandbox: false,
    //   },
    //   codesandbox: {
    //     deps: { 'lodash': 'latest' },
    //     json: '',
    //     query: '',
    //     embed: '',
    //   },
    //   demoCodeMark: 'demo-code',
    //   copyOptions: { align: 'top', selector: '.demo-and-code-wrapper div[class*="language-"] pre', successText: "copied", staticIcon: true },
    // },
    // ],
    "vuepress-plugin-copyright",
    {
      noCopy: true, // the selected text will be non-copyable
      minLength: 40, // if its length is greater than 100
      authorName:
        "Mark Kozel. This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License",
      clipboardComponent: "../components/ClipboardComponent.vue",
    },
    // "@vuepress/back-to-top",

    [
      "vuepress-plugin-container",
      {
        type: "readmore",
        before: (info) =>
          `<div class="readmore">
            <p class="readmoretitle">Read More: <em> ${info}</em></p>`,
        after: () => "</div>\n",
      },
    ],

    ["vuepress-plugin-container",
      {
        type: "thinkaboutit",
        // before: (info) => `<div class="thinkaboutit"><p class="thinkaboutittitle">${info}</p>`,
        before: (info) =>
          `<div class="custom-container thinkaboutit"> ${info ? `<p class="custom-container-title thinkaboutittitle">${info}</p>` : ''}\n`,
        after: () => "</div>\n",
      },
    ],

    [
      "vuepress-plugin-container", {
        type: "whatsgoingon",
        before: (info) => `<div class="whatsgoingon">
          <p class="title">What's Going On${info}</p>`,
        after: () => "</div>\n",
      },
    ],

    [
      "vuepress-plugin-container", {
        type: "bythenumbers",
        before: (info) => `<div class="bythenumbers"><h4>By The Numbers: <u>${info}</u></h4>`,
        after: () => "</div>\n",
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

    // ["@vuepress/container",
    //   {
    //     type: "thinkaboutit",
    //     before: info => `<div class="thinkaboutit"><p class="title">${info}</p>`,
    //     after: "</div>",
    //   },
    // ],

    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: "Tip",
      },
    ],

    // ['@vuepress/plugin-nprogress'],
    // ['@vuepress/active-header-links'],
  ],
}