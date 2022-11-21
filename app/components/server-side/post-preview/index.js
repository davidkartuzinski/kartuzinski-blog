import Link from 'next/link';
import styles from './post-preview.module.css';
import { shortenParagraph } from '../../../lib/helpers';
import { allPosts } from '../../../../.contentlayer/generated';
import dayjs from 'dayjs';

import {
  ReadNextIcon,
  PublishDateIcon,
  CategoriesIcon,
  TagsIcon,
} from '../icons';

const PostPreview = ({ slug, categories, title, date, excerpt, tags }) => (
  <section className={styles.section}>
    <h2>
      <Link href={slug} passHref>
        {title}
      </Link>
    </h2>
    <div>
      <p>{shortenParagraph(excerpt, 100)}</p>

      <div className={styles.meta}>
        <PublishDateIcon />
        <span className='text_small'>PUBLISHED ON:</span>

        <span className='text_small'>{date.toUpperCase()}</span>
      </div>
      <div className={styles.meta}>
        <CategoriesIcon />
        <span className='text_small'>CATEGORY:</span>

        {categories.map((category) => (
          <span className='text_small' key={category}>
            {category.toUpperCase()}
          </span>
        ))}
      </div>
      <div className={styles.meta}>
        <TagsIcon />
        <span className='text_small'>TAG:</span>

        {tags.map((tag) => (
          <span className='text_small' key={tag}>
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
    </div>

    <Link href={slug} passHref className={styles.read_more}>
      <div className={styles.meta}>
        Read the rest <ReadNextIcon />
      </div>
    </Link>
  </section>
);

function AllPostPreviews() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const tempAllPosts = posts.map((post) => ({
    ...post,
    date: dayjs(post.date).format('MMMM D, YYYY'),
  }));

  const newPostsArray = tempAllPosts.map(
    ({ title, date, slug, description, categories, tags }) => {
      return { title, date, slug, description, categories, tags };
    }
  );

  return (
    <>
      {newPostsArray.map((post, idx) => (
        <ul className={styles.ul} key={idx}>
          <PostPreview
            slug={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.description}
            author={post.author}
            categories={post.categories}
            tags={post.tags}
          />
        </ul>
      ))}
    </>
  );
}
export default AllPostPreviews;
