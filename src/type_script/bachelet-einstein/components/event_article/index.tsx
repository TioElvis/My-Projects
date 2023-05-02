'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css';
import { Collapse } from '@mui/material';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

export default function EventArticle() {
  const [collapse, setCollapse] = useState<boolean>(false);

  const changeState = () => {
    setCollapse(!collapse);
  };

  return (
    <article className={styles.event_article}>
      <div className={styles.flex_header_title_link}>
        <div className={styles.flex_header_title} onClick={changeState}>
          <header className={styles.header}>
            <p style={{ fontSize: '2.5rem' }}>23</p>
            <div>
              <p>Giovedi</p>
              <p>Dicembre</p>
            </div>
          </header>
          <div className={styles.flex_title}>
            <h3>Taller de matematicas</h3>
            {collapse ? <ChevronUpIcon style={{ width: '1.25rem' }} /> : <ChevronDownIcon style={{ width: '1.25rem' }} />}
          </div>
        </div>
        <Link href="/" className={`${styles.link} ${styles.hidden_max900}`}>
          Iscriveti Adesso
        </Link>
      </div>
      <Collapse in={collapse} timeout="auto">
        <div className={styles.collapse}>
          <p>Feb 04, 2035, 11:00 AM - 5:00 PM</p>
          <p>Great Hall, Brockway Community College, 500 Terry A Francois Blvd, San Francisco, CA 94158, USA I'm an event description.</p>
          <br />
          <p>
            Click here to open up the Event Editor and change my text. Simply click me, Manage Event and start editing your event. I'm a great place
            for you to say a little more about your upcoming event.
          </p>
        </div>
      </Collapse>
      <Link href="/" className={`${styles.link} ${styles.hidden_min900}`}>
        Iscriveti Adesso
      </Link>
    </article>
  );
}
