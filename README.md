# This Blog is Built with...

Please find the overall "tech-stack" for this blog.

1. I am using [Next.js](https://nextjs.org/blog/next-13) 13 for the framework for the blog. The ease with how we can now only change the component that has a state change, is very appealing and refreshing. **WITHOUT TYPESCRIPT**.

- I am **NOT** using the _Legacy Mode_ with the `./pages` directory.
- Everything sits in the brand-new `./app` directory.

2. I am using [ContentLayer](https://www.contentlayer.dev/docs) to be the data layer.
3. I have configured MDX (within Contentlayer) to use [Rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md) plugins. I am also using additional MDX plugins for various other features. I am specifically using the following plugins:

- [rehypeSlug](rehype-slug)
- [rehypeAutolinkHeadings](https://github.com/rehypejs/rehype-autolink-headings)
- [rehypeCodeTitles](https://github.com/rockchalkwushock/rehype-code-titles)
- [rehypePrism](https://github.com/timlrx/rehype-prism-plus)
- [remarkGfm](https://github.com/remarkjs/remark-gfm)
- [readingTime](https://github.com/mattjennings/remark-reading-time)
- [toc](https://github.com/JS-DevTools/rehype-toc) -- COMING SOON

[NOTE: Excellent guide to all this [universe of Rehype/Remark/etc](https://unifiedjs.com/learn/guide/introduction-to-unified/)]

4. I am hosting my Blog on [Vercel Premium Hosting](https://vercel.com/). I tried the service using their Free Hosting and upgraded as the Premium/Paid service has support for unlimited domains. Did I mention how freakin' easy it is to use?
