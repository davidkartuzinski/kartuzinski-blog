import styles from './post-layout.module.css';
import Link from 'next/link';

import {
  AuthorIcon,
  PublishDateIcon,
  TimerIcon,
  CategoriesIcon,
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

function PostLayout({ title, author, date, category, readingTime, body }) {
  const MDXContent = useMDXComponent(body);
  return (
    <div>
      <h1>{title}</h1>
      <article className={styles.article}>
        <section className={styles.section}>
          <div>
            <div className={styles.meta}>
              <AuthorIcon />
              <span>Written by:</span>
              <span> {author}</span>
            </div>
            <div className={styles.meta}>
              <PublishDateIcon />
              <span>Published on </span>
              <span>
                <time>{date}</time>
              </span>
            </div>
            <div className={styles.meta}>
              <CategoriesIcon />
              <span>Category:</span>
              <span>{category}</span>
            </div>
            <div className={styles.meta}>
              <TimerIcon />
              <span>Reading time:</span>
              <span>{readingTime}</span>
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
