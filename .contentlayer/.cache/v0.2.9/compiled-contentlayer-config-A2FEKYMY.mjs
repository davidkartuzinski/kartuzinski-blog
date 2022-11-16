// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
var computedFields = {
  readingTime: { type: "json", resolve: (post) => readingTime(post.body.raw) },
  slug: {
    type: "string",
    resolve: (post) => `/${post._raw.flattenedPath}`
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The create date of the post",
      required: true
    },
    dateModified: {
      type: "date",
      description: "The last updated date of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The excerpt or description of the post to show as a snippet.",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    category: {
      type: "string",
      description: "The category of the post to show as a snippet.",
      required: true
    },
    canonical: {
      type: "string",
      description: "If this is a copy or duplicate of another post, what is that URL",
      required: false
    }
  },
  computedFields
}));
var contentLayerConfig = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-A2FEKYMY.mjs.map
