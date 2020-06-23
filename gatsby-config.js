module.exports = {
  siteMetadata: {
    title: 'Notes',
    description: `Collection of interesting notes`,
    author: 'Shubham',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false
      },
    },
  ],
}
