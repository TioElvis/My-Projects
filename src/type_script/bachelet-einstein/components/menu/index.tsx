'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import styles from './index.module.css';
import nav_pages from '@/utils/nav_pages';
import LinkLoginProfile from '../link_login_profile';
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Menu() {
  const [menu, setMenu] = useState<boolean>(false);

  const changeStateMenu = () => setMenu(!menu);

  return (
    <>
      <Bars3Icon className={styles.icon} onClick={changeStateMenu} />
      <Drawer open={menu} onClose={changeStateMenu}>
        <div className={styles.menu}>
          <div>
            <div>
              <p style={{ fontSize: '1rem' }}>Bachelet-Einstein</p>
              <p style={{ fontSize: '0.8rem' }}>Instituto Tecnologico ed Economico</p>
            </div>
            <nav className={styles.navbar}>
              {nav_pages.map(({ name, to }) => {
                return (
                  <Link href={to} key={name} className={styles.link}>
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <LinkLoginProfile />
        </div>
      </Drawer>
    </>
  );
}
