'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.css'
import { Collapse } from '@mui/material'
import { TEventArticle } from '@/utils/types'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

export default function Article({ props }: TEventArticle) {
  const [collapse, setCollapse] = useState<boolean>(false)

  const changeStateCollapse = () => setCollapse(!collapse)

  return (
    <article className={styles.event_article}>
      <button className={styles.button_collapse} onClick={changeStateCollapse}>
        <header className={styles.header_event_article}>
          <h2 className={styles.date}>{props.full_date.date}</h2>
          <div className={styles.day_and_month}>
            <h4>{props.full_date.day}</h4>
            <h4>{props.full_date.month}</h4>
          </div>
        </header>
        <div>
          <p>{props.title}</p>
          {collapse ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
        </div>
      </button>
      <Collapse in={collapse} timeout="auto">
        <div className={styles.collapse_event_article}>
          <div className={styles.profile}>
            <img src={props.creator.avatar} alt="" />
            <div>
              <p>{props.creator.name}</p>
              <p> {props.tags.join(' | ')}</p>
            </div>
          </div>
          <br />
          <p>{props.address}</p>
          <br />
          <p>{props.description}</p>
          <br />
          <Link href="/eventi">
            <div className={styles.register_now}>Iscriviti Adesso</div>
          </Link>
        </div>
      </Collapse>
    </article>
  )
}
