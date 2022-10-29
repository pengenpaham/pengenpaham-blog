export default {
    title: "PengenPaham",
    description: "Blog for learning",
    lastUpdated: true,
    themeConfig: {
        logo: 'logo.png',
        // nav: [
        //     { text: 'Contribution Guide', link: '/contribution-guide' },
        //     { text: 'Learning Path', link: '/learning-path' },
        //     { text: 'Roadmap', link: '/roadmap' },
        // ],
        socialLinks: [
            { icon: 'instagram', link: 'https://instagram.com/pengenpaham' },
            { icon: 'github', link: 'https://github.com/p9m-org' },
        ],
        sidebar: [
            {
              text: 'Introduction',
              items: [
                { text: 'Contribution Guide ✨', link: '/contribution-guide' },
                { text: 'Learning Path', link: '/learning-path' },
                { text: 'Roadmap 🗺', link: '/roadmap' },
                { text: 'References', link: '/references' },
              ]
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present @pengenpaham'
        }
    }
}
