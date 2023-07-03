import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.inner_footer}>
        <p>
          <small>
            &copy; 2022 - 2023 David Kartuzinski - A developer living in Paris,
            France. All Rights Reserved. <br /> Website built using{' '}
            <a
              href='https://nextjs.org/blog/next-13'
              target='_blank'
              rel='noopener noreferrer'
            >
              Next.js 13
            </a>
            . Hosted on{' '}
            <a
              href='https://vercel.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Vercel Pro
            </a>
            .
          </small>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
