import styles from './layout.module.css';
import AllPostPreviews from './components/server-side/post-preview/index';

export default function Home() {
  return (
    <div>
      <h1>My Blog Posts</h1>
      <article className={styles.article}>
        <AllPostPreviews />
      </article>
    </div>
  );
}
