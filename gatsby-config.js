const dotenv = require('dotenv')
dotenv.config({ path: `${__dirname}/.env` })

module.exports = {
  siteMetadata: {
    title: `Yoshimitsu Egashira`,
    description: `meta description のテスト`,
    author: `@yossiee_jp`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3c4c6c`,
        theme_color: `#3c4c6c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: `about`,
            format: 'object'
          },
          {
            endpoint: `entries`
          }
        ]
      }
    }
  ]
}
