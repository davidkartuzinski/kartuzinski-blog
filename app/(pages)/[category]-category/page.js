import { allPosts } from '../../../.contentlayer/generated';
import PostLayout from '../../components/server-side/post-layout';
import dayjs from 'dayjs';
import { slugify } from '../../lib/helpers';

//https://github.com/vercel/next.js/discussions/41745#discussioncomment-4264660

// @baszalmstra Server components have a params prop that you can use to grab dynamic paths. /protected/[pageNumber] will have ServerComponent({ params: { pageNumber } })

export const dynamicParams = false;

export async function getStaticParams() {
  let paths = [];

  allPosts.map((post) => {
    if (post.draft === false) {
      post.categories.map((category) => {
        const slug = slugify(category);
        paths.push({ params: { slug } });
      });
    }
  });

  return { paths };
}

function fetchPost(params) {
  const rawPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  const post = {
    ...rawPost,
    date: dayjs(rawPost.date).format('MMMM D, YYYY'),
  };

  return post;
}

export default function Post({ params }) {
  const post = fetchPost(params);

  return (
    <PostLayout
      title={post.title}
      author={post.author}
      date={post.date}
      categories={post.categories}
      tags={post.tags}
      readingTime={post.readingTime.text}
      body={post.body.code}
    />
  );
}
