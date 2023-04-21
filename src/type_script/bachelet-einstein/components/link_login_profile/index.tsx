import Link from 'next/link'
import styles from './index.module.css'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function LinkLoginProfile() {
  return (
    <Link href="/login" className={styles.link}>
      <UserCircleIcon className={styles.icon} />
      LOGIN
    </Link>
  )
}
