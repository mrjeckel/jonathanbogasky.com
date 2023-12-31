/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'jonathanbogasky.info',
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
        link: '/tryingtofindtime'
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
    'gatsby-transformer-json'
  ],
}
