'use client';
import Link from 'next/link';
import { Collapse } from '@mui/material';
import useToggle from '@/hooks/useToggle';
import styles from '@/styles/event_article/index.module.css';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface IEventArticle {
  title: string;
  date: {
    name_day: string;
    day: number;
    name_mounth: string;
  };
  address: string;
  description: string;
}

export default function EventArticle({ title, date, address, description }: IEventArticle) {
  const [collapse, setCollapse] = useToggle();

  return (
    <article className={styles.event_article}>
      <div>
        <div onClick={setCollapse}>
          <header className={styles.event_article_header}>
            <p style={{ fontSize: '2.5rem' }}>{date.day}</p>
            <div>
              <p>{date.name_day}</p>
              <p>{date.name_mounth}</p>
            </div>
          </header>
          <div>
            <h3>{title}</h3>
            {collapse ? <ChevronUpIcon style={{ width: '1.25rem' }} /> : <ChevronDownIcon style={{ width: '1.25rem' }} />}
          </div>
        </div>
        <Link href="" className={`${styles.event_article_link} ${styles.hidden_max900}`}>
          Iscriveti Adesso
        </Link>
      </div>
      <Collapse in={collapse} timeout="auto">
        <div style={{ padding: '1rem 0' }}>
          <p>{address}</p>
          <br />
          <p>{description}</p>
        </div>
      </Collapse>
      <Link href="" className={`${styles.event_article_link} ${styles.hidden_min900}`}>
        Iscriveti Adesso
      </Link>
    </article>
  );
}
