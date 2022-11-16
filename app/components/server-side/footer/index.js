import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.inner_footer}>
        <p>
          <small>&copy; 2022 David Kartuzinski - A developer in Paris</small>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
