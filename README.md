# This Blog is Built with...

Please find the overall "tech-stack" for this blog.

1. I am using [Next.js](https://nextjs.org/blog/next-13) 13 for the framework for the blog. The ease with how we can now only change the component that has a state change, is very appealing and refreshing. **WITHOUT TYPESCRIPT**.

- I am **NOT** using the _Legacy Mode_ with the `./pages` directory.
- Everything sits in the brand-new Next.js 13 `./app` directory.
- I am **NOT** using a CMS though I recommend [Strapi with Next.js](https://strapi.io/blog) if you the user will find a CMS easier.

2. I am using [ContentLayer](https://www.contentlayer.dev/docs) to be the data layer.
3. I have configured MDX (within Contentlayer) to use [Rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md) plugins. I am also using additional MDX plugins for various other features. I am specifically using the following plugins:

[**NOTE:** Excellent guide to all this [universe of Rehype/Remark/etc](https://unifiedjs.com/learn/guide/introduction-to-unified/)]

- [rehypeSlug](rehype-slug)
- [rehypeAutolinkHeadings](https://github.com/rehypejs/rehype-autolink-headings)
- [rehypeCodeTitles](https://github.com/rockchalkwushock/rehype-code-titles)
- [rehypePrism](https://github.com/timlrx/rehype-prism-plus)
- [remarkGfm](https://github.com/remarkjs/remark-gfm)
- [readingTime](https://github.com/mattjennings/remark-reading-time)
<!-- - [toc](https://github.com/JS-DevTools/rehype-toc) -- COMING SOON -->

4. I am using CSS Modules. Aside from the reasons listed in this article [regarding CSS Modules in general](https://blog.openreplay.com/using-css-modules-in-react/#:~:text=In%20React%20js%2C%20where%20classes,lessens%20React%20styling's%20global%20scope.), I didn't find any need to use [styled-components](https://styled-components.com/), especially for a one develop project like this blog of mine.

5. I am hosting my Blog on [Vercel Premium Hosting](https://vercel.com/). I tried the service using their Free Hosting and upgraded as the Premium/Paid service has support for unlimited domains. Did I mention how freakin' easy it is to use?

Many thanks for those developers who wrote articles or otherwise helped me to understand something or move forward with my blog.

In no particular order, thank you:

1. Delba Oliveira, [her excellent blog post regarding Next.js 12 and MDX](https://delba.dev/blog/next-blog-structured-mdx-content-with-contentlayer)
2. Maximilian Schwarzmüller, [his comprehensive and easy to follow Udemy Next.js 10-12 Course](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25229440?start=0#content)
3. Rajdeep Singh, [his series of Next.js articles on Medium](https://medium.com/@officialrajdeepsingh/list/create-static-blog-with-nextjs-and-markdown-34cbab11b5ed)
4. Hossein Shourabi, [excellent article on using ContentLayer](https://blog.mrcatdev.com/turns-your-mdx-files-include-yaml-into-data-with-contentlayer-in-nextjs-100daysofcode)
5. Josh Comeau, for his [awesome blog](https://www.joshwcomeau.com/) and specifically his [custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) and his outline on [how he built his own blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog/) with Nextjs.
6. Oliver Schöndorfer, for the [very understandable primer on font](https://pimpmytype.com/font-size/) and how to do it right.

I used these tools:

1. [coloors](https://coolors.co/) - to help me come up with a great color scheme.
2. [favicon generator](https://favicon.io/) - from a 512px x 512px original favicon image.
3. [Access Color Generator](https://www.learnui.design/tools/accessible-color-generator.html) - to come up with my color scheme, I used this tool to ensure the contrast was sufficient.
4. [Aspect Ratio Calculator](https://andrew.hedges.name/experiments/aspect_ratio/), an oldie but goodie. I use this to resize images to the correct width while maintaining aspect ratio.
5. [Visual Type Scale](https://type-scale.com/), another oldie but goodie. This helps to create visual hieracky for my headings. (h1-h6 tags)
6. [ResponsivelyApp](https://responsively.app/) This app is an open source, multibrowser browser. It let's you see your design across multiple screen sizes at the same time.
