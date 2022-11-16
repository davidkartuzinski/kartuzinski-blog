import styles from './aside.module.css';

function Aside({ children }) {
  return <aside className={styles.aside}>{children}</aside>;
}

export default Aside;
