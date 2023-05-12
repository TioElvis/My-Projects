'use client';
import Link from 'next/link';
import PAGES from '@/utils/pages';
import { Drawer } from '@mui/material';
import useToggle from '@/hooks/useToggle';
import styles from '@/styles/menu/index.module.css';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Menu() {
  const [menu, setMenu] = useToggle();

  return (
    <>
      <Bars3Icon className={styles.icon} onClick={setMenu} />
      <Drawer open={menu} onClick={setMenu}>
        <div className={styles.menu}>
          <div>
            <div>
              <div>
                <p style={{ fontSize: '1.2rem' }}>Bachelet-Einstein</p>
                <p style={{ fontSize: '1rem' }}>Instituto Tecnologico ed Economico</p>
              </div>
            </div>
            <nav className={styles.navbar}>
              {PAGES.map(({ name, to }) => {
                return (
                  <Link href={to} key={name}>
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <Link href="/login" className={styles.login}>
            <UserCircleIcon style={{ width: '1.45rem' }} />
            LOGIN
          </Link>
        </div>
      </Drawer>
    </>
  );
}
