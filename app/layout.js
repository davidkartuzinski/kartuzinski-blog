import './globals/globals.css';
import './globals/prism-styles.css';
import styles from './layout.module.css';

import LatestPosts from './components/client-side/latest-posts';
import Aside from './components/server-side/aside/index';
import Bio from './components/server-side/bio';
import Footer from './components/server-side/footer/index';
import Header from './components/server-side/header/index';
import SocialFollowMe from './components/server-side/social-follow-me';
import Widget from './components/server-side/widget';
import { figtree, lora } from './globals/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={figtree.variable}>
      <head />
      <body className={lora.variable}>
        <Header />
        <main className={styles.main}>
          <section className={styles.section_content}>{children}</section>
          <section className={styles.section_widgets}>
            <Aside>
              <Widget>
                <h3 style={{ marginTop: 0 }}>BIO</h3>
                <Bio />
              </Widget>
              <Widget>
                <h3>LATEST POSTS</h3>
                <LatestPosts />
              </Widget>
              <Widget>
                <h3>CONNECT WITH ME</h3>
                <SocialFollowMe />
              </Widget>
            </Aside>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
