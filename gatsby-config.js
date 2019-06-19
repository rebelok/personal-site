module.exports = {
  siteMetadata: {
    title: 'Andrew Vdovichenko',
    subTitle: 'Wandering Software Engineer',
    author: 'Andrew Vdovichenko',
    description: `An edge of a software engineer.`,
    siteUrl: `https://andrew-vdo.me/`,
    social: {
      twitter: `r6w`,
      github: 'rebelok',
      linkedIn: 'andrewvdovichenko',
      email: 'andrew.vdovichencko@gmail.com',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allContentfulBlogPost } }) => {
    //           return allContentfulBlogPost.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               date: edge.node.publishedDate,
    //               url: site.siteMetadata.siteUrl + edge.node.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.slug,
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    //               edges {
    //                 node {
    //                   slug
    //                   title
    //                   description
    //                   publishedDate(formatString: "MMMM Do, YYYY")
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Andrew Vdovichenko's RSS Feed",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Software Engineer's Edge`,
        short_name: `SoftEngEdge`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
