const gangleri = require('gangleri')

const sitemapUrl = 'https://cleasby-vigfusson-dictionary.vercel.app/sitemap.xml'

const walkTheSitemap = async () => {
  await gangleri.visitSitemap(sitemapUrl, 5)
}

walkTheSitemap()
