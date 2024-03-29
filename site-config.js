const path = require('path');

module.exports = {
  siteTitle: `notes from the hackerspace`,
  siteTitleShort: `Conor's Blog`,
  siteDescription: `notes from the hackerspace - a blog from cone`,
  siteUrl: `https://conorriches.co.uk`,
  author: 'Conor',
  themeColor: `#fff`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/home/colourful.jpg'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
