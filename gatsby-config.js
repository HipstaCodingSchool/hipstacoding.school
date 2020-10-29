module.exports = {
  siteMetadata: {
    title: "Hipsta Coding School",
    siteUrl: "https://hipstacoding.school/",
    description: "Hipsta Coding School - прогрессивные курсы креативного программирования. Идет набор на курс ''",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_ID,
        // Setting this parameter is optional
        anonymize: true,
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
      },
    },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "gatsby-starter-default",
    //     short_name: "starter",
    //     start_url: "/",
    //     background_color: "#663399",
    //     theme_color: "#663399",
    //     display: "minimal-ui",
    //     icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};
