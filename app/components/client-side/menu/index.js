'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

import styles from './menu.module.css';
import React, { Fragment } from 'react';
import { menuLinks } from '../../../globals/menu-links';

import { figtree } from '../../../globals/fonts';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const pathname = usePathname();

  const style = {
    marginRight: 10,
    fontWeight: pathname === href ? '900' : '500',
    textDecoration: pathname === href ? 'underline' : 'none',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function MenuLinkItems() {
  return (
    <ul className={(figtree.variable, styles.menu)}>
      {menuLinks.map((link) => (
        <li key={link.id}>
          <ActiveLink passHref href={link.urlPath}>
            {link.label.toUpperCase()}
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
}

export function MobileMenu({ href }) {
  const pathname = usePathname();
  // https://stackoverflow.com/questions/70694985/input-switch-requires-double-click-before-activating-in-next-js
  const [menuActive, setMenuActive] = useState(true);

  const Toggle = ({ onChange }) => (
    <Fragment>
      <input
        className={styles.side_menu_toggle}
        onChange={onChange}
        type='checkbox'
        id='side_menu'
      />
      <label className={styles.hamb} htmlFor='side_menu'>
        <span className={styles.hamb_line}></span>
      </label>
    </Fragment>
  );

  return (
    <Fragment>
      <Toggle
        value={menuActive}
        onChange={(event) => {
          pathname === href
            ? setMenuActive(event.target.checked)
            : setMenuActive(event.target.unchecked);
        }}
      />
      <nav className={styles.nav}>
        <MenuLinkItems />
      </nav>
    </Fragment>
  );
}
