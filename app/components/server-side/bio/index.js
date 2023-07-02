import Image from 'next/image';
import styles from './bio.module.css';
import bioImage from '../../../../public/david-kartuzinski.jpg';

function Bio() {
  return (
    <section className={styles.bio}>
      <Image
        src={bioImage}
        alt='Picture of David Kartuzinski, author'
        width={243}
        height={243}
      />

      <p>
        David Kartuzinski is a software developer who loves open source,
        blockchain and React.js. He is currently working on several exciting
        projects.
      </p>
    </section>
  );
}
export default Bio;
