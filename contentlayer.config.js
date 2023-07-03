import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields = {
  readingTime: { type: 'json', resolve: (post) => readingTime(post.body.raw) },
  slug: {
    type: 'string',
    resolve: (post) => `/${post._raw.flattenedPath}`,
  },
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The create date of the post',
      required: true,
    },
    dateModified: {
      type: 'date',
      description: 'The last updated date of the post',
      required: true, // mandatory so just use the created date until modified later.
    },
    draft: {
      type: 'boolean',
      default: false,
      description: 'Is the post a draft?',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    description: {
      type: 'string',
      description:
        'The excerpt or description of the post to show as a snippet.',
      required: true,
    },
    tags: {
      type: 'list',
      description: 'The related tags of the post.',
      of: { type: 'string' },
    },
    categories: {
      type: 'list',
      description: 'The related categories of the post.',
      of: { type: 'string' },
    },
    canonical: {
      type: 'string',
      description:
        'If this is a copy or duplicate of another post, what is that URL',
      required: false,
    },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  // location of the source files
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypePrism],
  },
});

export default contentLayerConfig;
