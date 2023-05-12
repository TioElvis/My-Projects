import Link from 'next/link';
import PAGES from '@/utils/pages';
import Menu from '@/components/menu';
import styles from '@/styles/header/index.module.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p style={{ fontSize: '1rem' }}>Bachelet-Einstein</p>
        <p style={{ fontSize: '0.8rem' }}>Instituto Tecnologico ed Economico</p>
      </div>
      <nav className={styles.navbar}>
        {PAGES.map(({ name, to }) => {
          return (
            <Link href={to} key={name}>
              {name}
            </Link>
          );
        })}
        <Link href="/login">
          <UserCircleIcon style={{ width: '1.45rem' }} />
          LOGIN
        </Link>
      </nav>
      <Menu />
    </header>
  );
}
