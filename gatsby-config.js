module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://gatsby.local/graphql`,
          develop: {
            hardCacheMediaFiles: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `http://gatsby.local/graphql`,
      },
    },
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
          // Base URL needs to include protocol (http/https)
          baseUrl: 'http://gatsby.local',
          // Gravity Forms API
          api: {
              key: 'ck_1f866e1a70fa79995817fffcb5a17f00de7cfe57',
              secret: 'cs_e9772376c8121d85b5434ca9b4e5a5bb784d3cab',
          },
      },
  },
  ],
}
