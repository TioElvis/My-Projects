import styles from './index.module.css'
import { TEventArticle } from '@/utils/types'
import why_select_this_school from '@/utils/why-select-this-school'

const my_first_event_article: TEventArticle = {
  props: {
    id: '',
    full_date: {
      date: 29,
      day: 'Giovedi',
      month: 'Dicembre',
    },
    creator: {
      name: 'Segretaria',
      avatar: 'https://res.cloudinary.com/descpalk4/image/upload/v1679512288/1065578_q14mxi.jpg',
    },
    tags: ['Einstein', 'Eventi', 'Matematica'],
    title: 'Taller de Matematicas',
    address: 'Al Liceo Einstein, Il Giovedi 29, 11:00 - 17:00 in Via Pasquale II, 237, 00166 Roma RM, Italia.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem doloremque ex debitis dolorem voluptates, unde perspiciatis, atque aspernatur illo earum vel est id, explicabo error neque sequi ipsam? Perspiciatis, ut!.',
  },
}

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p className={styles.name_of_school}>Bachelet-Einstein</p>
          <p className={styles.welcome}>Qui troverai delle notizie, eventi e tanti cose che riguardano la scuola</p>
        </div>
      </div>
      <div className={styles.why_select_this_school}>
        <div className={styles.question}>
          <h1>Perchè Venire Al I.I.S. Bachelet-Einstein?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem doloremque ex debitis dolorem voluptates, unde perspiciatis,
            atque aspernatur illo earum vel est id, explicabo error neque sequi ipsam? Perspiciatis, ut!
          </p>
        </div>
        <div className={styles.options}>
          {why_select_this_school.map((element, index) => {
            const condition = index === 0
            return (
              <article
                key={element.title}
                className={styles.option}
                style={{ backgroundColor: `${element.bg_color}`, color: `${condition ? 'black' : 'white'}` }}
              >
                <header>
                  <element.icon className={styles.icon} />
                  {element.title}
                </header>
                <p>{element.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}
