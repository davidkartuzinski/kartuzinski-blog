'use client';

import { allPosts } from '../../../../.contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './latest-posts.module.css';

function LatestPosts() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const tempAllPosts = posts.map((post) => ({
    ...post,
    date: dayjs(post.date).format('MMMM D, YYYY'),
  }));

  const newPostsArray = tempAllPosts.map(({ title, date, slug }) => {
    return { title, date, slug };
  });

  const listItems = newPostsArray.slice(0, 5).map((post) => {
    if (!hasMounted) {
      return null;
    }

    return (
      <li key={post.title}>
        <Link href={post.slug}>{post.title}</Link>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.latest_posts}>{listItems}</ul>
    </>
  );
}
export default LatestPosts;
