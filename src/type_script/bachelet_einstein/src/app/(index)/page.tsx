import styles from '@/styles/home/index.module.css';
import EventArticle from '@/components/event_article';
import { UserGroupIcon, BookmarkIcon, HeartIcon } from '@heroicons/react/24/outline';

const WHY_SELECT_THIS_SCHOOL = [
  {
    icon: UserGroupIcon,
    title: 'Comunità',
    description: 'Costruiamo insieme un mondo migliore',
    bg_color: 'var(--light-gray)',
  },
  {
    icon: BookmarkIcon,
    title: 'Accademia',
    description: 'Ti aiutiamo a sviluppare competenze per il mondo lavorativo',
    bg_color: 'var(--dark-gold)',
  },
  {
    icon: HeartIcon,
    title: 'Supporto',
    description: 'Siamo per te in qualsiasi momento',
    bg_color: 'var(--blue)',
  },
];

const example_article = {
  title: 'Viaje a Barcelona',
  date: {
    name_day: 'Jueves',
    day: 12,
    name_mounth: 'Diciembre',
  },
  address: 'Great Hall, Brockway Community College, 500 Terry A Francois Blvd, San Francisco, CA 94158',
  description:
    'Click here to open up the Event Editor and change my text. Simply click me, Manage Event and start editing your event. Im a great place for you to say a little more about your upcoming event.',
};

export default function HomePage() {
  return (
    <>
      <div className={styles.bg_image}>
        <div className={styles.container}>
          <p>Bachelet-Einstein</p>
          <p>Qui troverai delle notizie, eventi e tanti cose che riguardano la scuola</p>
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
        <div className={styles.reasons}>
          {WHY_SELECT_THIS_SCHOOL.map((element, index) => {
            const condition = index === 0;
            return (
              <article key={element.title} style={{ backgroundColor: `${element.bg_color}`, color: `${condition ? 'black' : 'white'}` }}>
                <header>
                  <element.icon style={{ width: '2rem' }} />
                  <h2>{element.title}</h2>
                </header>
                <p>{element.description}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className={styles.last_events}>
        <div>
          <h1>Prossimi Eventi</h1>
          <EventArticle {...example_article} />
          <EventArticle {...example_article} />
          <EventArticle {...example_article} />
        </div>
      </div>
    </>
  );
}
