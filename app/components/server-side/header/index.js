import { MenuLinkItems, MobileMenu } from '../../client-side/menu';
import Logo from '../logo';
import SocialFollowMe from '../social-follow-me';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.main_menu_links}>
        <MenuLinkItems />
      </nav>
      <SocialFollowMe />
      <MobileMenu />
    </header>
  );
};

export default Header;
