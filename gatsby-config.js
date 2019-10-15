module.exports = {
  siteMetadata: {
    title: 'Donald J. Trump Impeachment Timeline',
    description: 'Timeline of events that have lead to the impeachment inquiry of Donald J. Trump',
    author: '@tylerbmcsilva',
    twitterHandle: '@tymcsilva'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106504504-2",
        head: false
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'impeachment-timeline-2019',
        short_name: 'impeachment-2019',
        start_url: '/',
        background_color: '#B71C1C',
        theme_color: '#B71C1C',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
