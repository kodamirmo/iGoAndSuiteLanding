/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `iGoAndSuite`,
    description: `More like hello efficiency.`,
    author: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout`
      }
    },{
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "landing.igoandsee.com",
      },
    },
  ],
}
