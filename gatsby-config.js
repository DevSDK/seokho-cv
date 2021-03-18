module.exports = {
	pathPrefix: '/cv',
plugins: ['gatsby-plugin-react-helmet',
  {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault:false
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YVE8FW7XML"
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
    resolve: `gatsby-plugin-webpack-size`,
    }
]
}
