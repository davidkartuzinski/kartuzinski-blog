import styles from './post-layout.module.css';
import Link from 'next/link';

import {
  AuthorIcon,
  PublishDateIcon,
  TimerIcon,
  CategoriesIcon,
  TagsIcon,
  PreviousPageIcon,
  NextPageIcon,
} from '../icons';

import {
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
} from '../../client-side/mdx/Mdxheadings';
import { default as Image } from '../mdx/MdxImages';

const mdxComponents = {
  Image,
  Link,
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  h6: MdxH6,
};

import { useMDXComponent } from 'next-contentlayer/hooks';

function PostLayout({
  title,
  author,
  date,
  categories,
  tags,
  readingTime,
  body,
}) {
  const MDXContent = useMDXComponent(body);
  return (
    <div>
      <h1>{title}</h1>
      <article className={styles.article}>
        <section className={styles.section}>
          <div>
            <div className={styles.meta}>
              <AuthorIcon />
              <span className='text_small'>WRITTEN BY:</span>
              <span className='text_small'> {author.toUpperCase()}</span>
            </div>
            <div className={styles.meta}>
              <PublishDateIcon />
              <span className='text_small'>PUBLISHED ON:</span>
              <span className='text_small'>
                <time>{date.toUpperCase()}</time>
              </span>
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
            <div className={styles.meta}>
              <TimerIcon />
              <span className='text_small'>READING TIME:</span>
              <span className='text_small'>{readingTime.toUpperCase()}</span>
            </div>
          </div>
        </section>
        <section className={styles.section_details}>
          <MDXContent components={mdxComponents} />
        </section>
      </article>
    </div>
  );
}

export default PostLayout;
