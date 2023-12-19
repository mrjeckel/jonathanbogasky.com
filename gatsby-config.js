/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `jonathanbogasky.com`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/alwayslearning'
      },
      {
        name: 'Projects',
        link: '/tryingtofindfreetime'
      },
      {
        name: 'Github',
        link: 'https://github.com/mrjeckel',
        external: true
      }
    ]
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content`,
        },
    },
    'gatsby-transformer-remark'
  ],
}
