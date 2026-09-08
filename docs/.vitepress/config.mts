import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FluentModified Docs",
  description: "A modern, dark-tech UI library for Roblox scripts with 19+ themes and acrylic blur.",
  lang: 'en-US',

  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'one-dark-pro'
    },
    lineNumbers: true
  },

  themeConfig: {
    siteTitle: "FluentPro",

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/window' },
      { text: 'Elements', link: '/elements/button' },
      { text: 'Themes', link: '/guide/themes' },
      { text: 'Managers', link: '/managers/save-manager' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Installation', link: '/guide/getting-started' },
          { text: 'Window Setup', link: '/guide/window' },
          { text: 'Themes & Styling', link: '/guide/themes' }
        ]
      },
      {
        text: 'Core Components',
        collapsed: false,
        items: [
          { text: 'Window', link: '/components/window' },
          { text: 'Tabs', link: '/components/tab' },
          { text: 'Sections', link: '/components/section' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Notification', link: '/components/notification' },
          { text: 'Assets & Icons', link: '/components/assets' },
          { text: 'TitleBar & UserInfo', link: '/components/titlebar' }
        ]
      },
      {
        text: 'UI Elements',
        collapsed: false,
        items: [
          { text: 'Button', link: '/elements/button' },
          { text: 'Toggle', link: '/elements/toggle' },
          { text: 'Checkbox', link: '/elements/checkbox' },
          { text: 'Slider', link: '/elements/slider' },
          { text: 'Dropdown', link: '/elements/dropdown' },
          { text: 'Collapsible Section', link: '/elements/collabsiblesection' },
          { text: 'Divider & Space', link: '/elements/divider' },
          { text: 'Audio Player', link: '/elements/audio' },
          { text: 'Input & Textbox', link: '/components/textbox' }
        ]
      },
      {
        text: 'Managers & Addons',
        collapsed: false,
        items: [
          { text: 'Save Manager', link: '/managers/save-manager' },
          { text: 'Interface Manager', link: '/managers/interface-manager' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lypfy/FluentModified' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © FluentPro UI'
    }
  }
})
