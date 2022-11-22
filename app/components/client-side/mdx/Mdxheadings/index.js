'use client';

import Link from 'next/link';
import styles from './MdxHeadings.module.css';
import { useState, useEffect } from 'react';

// https://mikebifulco.com/posts/mdx-auto-link-headings-with-rehype-slug

const MdxHeading = ({ h, id, ...rest }) => {
  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [hasMounted, setHasMounted] = useState(false);
  const VariableHeader = h;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (id) {
    return (
      <Link href={`#${id}`}>
        <VariableHeader
          className={styles.mdx_heading}
          {...rest}
        ></VariableHeader>
      </Link>
    );
  }
  return <h1 {...rest} />;
};

export const MdxH1 = (props) => <MdxHeading h='h1' {...props} />;
export const MdxH2 = (props) => <MdxHeading h='h2' {...props} />;
export const MdxH3 = (props) => <MdxHeading h='h3' {...props} />;
export const MdxH4 = (props) => <MdxHeading h='h4' {...props} />;
export const MdxH5 = (props) => <MdxHeading h='h5' {...props} />;
export const MdxH6 = (props) => <MdxHeading h='h6' {...props} />;
