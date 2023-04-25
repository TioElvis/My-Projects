import EventArticle from '@/components/event_article';
import styles from './index.module.css';
import why_select_this_school from '@/utils/why-select-this-school';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p style={{ fontSize: '3rem' }}>Bachelet-Einstein</p>
          <p style={{ fontSize: '1.25rem' }}>Qui troverai delle notizie, eventi e tanti cose che riguardano la scuola</p>
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
            const condition = index === 0;
            return (
              <article
                key={element.title}
                className={styles.option}
                style={{ backgroundColor: `${element.bg_color}`, color: `${condition ? 'black' : 'white'}` }}
              >
                <header>
                  <element.icon style={{ width: '2rem' }} />
                  {element.title}
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
          <EventArticle />
          <EventArticle />
          <EventArticle />
        </div>
      </div>
    </>
  );
}
