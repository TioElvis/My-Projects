import Link from 'next/link';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import Menu from '@/components/menu';
import styles from './index.module.css';
import nav_pages from '@/utils/nav_pages';
import LinkLoginProfile from '@/components/link_login_profile';

export const metadata = {
  title: 'I.I.S. Bachelet-Einstein',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className={styles.header}>
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
            <LinkLoginProfile />
          </nav>
          <Menu />
        </header>
        {children}
        <footer>I'm Footer</footer>
      </body>
    </html>
  );
}
