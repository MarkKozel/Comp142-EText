
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
    nav: [
      { text: 'Course Info', link: '/CourseInfo/', },
    ],
  },

  sidebar: {
    '/CourseInfo/': [
      '',
    ],
  },

  markdown: {
    code: {
      lineNumbers: true,
    }
  },

}