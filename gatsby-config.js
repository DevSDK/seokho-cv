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
    }
]
}
