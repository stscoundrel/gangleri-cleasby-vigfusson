# Gangleri / Cleasby & Vigfusson

Walk through Cleasby &amp; Vigfusson Dictionary sitemap with Gangleri

### Usage

`yarn start`

### Motivation

Just triggers build / revalidate for each page in dictionary. There are more pages in the Dictionary than Vercel can handle at build time, so I wanted a way to ensure they're all build.

Note: nowadays Next.js & Vercel support [ISR on-demand](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation), which is better choice for revalidating / creating a bunch of pages. Cleasby & Vigfusson uses API route & script to generate all pages at command. This also seems to consume much less Vercel resources, as only API routes are used.
