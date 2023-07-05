export default {
    lang: 'en-US',
    title: "PengenPaham",
    description: "Infinite learning",
    lastUpdated: true,
    cleanUrls: true,
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        logo: './pengenpaham-logo.png',
        search: {
            provider: 'local'
        },
        nav: [
            { text: 'Medium', link: 'https://medium.com/pengenpaham' },
            { text: 'Mastodon', link: 'https://mastodon.social/@pengenpaham' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/pengenpaham' },
        ],
        sidebar: [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/getting-started' },
                { text: 'Contibuting Guide', link: '/contributing-guide' },
              ]
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present @pengenpaham'
        }
    }
}
