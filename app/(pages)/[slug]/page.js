import { allPosts } from '../../../.contentlayer/generated';

import dayjs from 'dayjs';
import PostLayout from '../../components/server-side/post-layout';

export const dynamicParams = false;

export async function getStaticParams() {
  return allPosts.map((post) => post.slug);
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
