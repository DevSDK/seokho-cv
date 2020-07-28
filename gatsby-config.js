module.exports = {
	pathPrefix: '/cv',
plugins: [
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
