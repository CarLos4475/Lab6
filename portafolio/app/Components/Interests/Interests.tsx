import styles from './Interests.module.css';

export default function Interests() {
  return (
    <section className={`${styles.interests} section`} id="interests">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">My passions</span>
          <h2 className="section__title">Interests and specialties</h2>
          <p className="section__description">
            Tech fields that excite me and I would like to specialize in
          </p>
        </div>

        <div className={styles.interests__grid}>

          <article className={styles.interest__card}>
            <div className={styles.card__icon}>
              <i className="fas fa-code"></i>
            </div>
            <h3 className={styles.card__title}>Data Analysis</h3>
            <p className={styles.card__description}>
              Examine, clean, transform and model data with the goal of discovering
              useful information, identifying patrons, trends and more
            </p>
            <div className={styles.card__tags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>SQL</span>
              <span className={styles.tag}>Statistics</span>
            </div>
          </article>

          <article className={styles.interest__card}>
            <div className={styles.card__icon}>
              <i className="fas fa-shield-halved"></i>
            </div>
            <h3 className={styles.card__title}>Cybersecurity</h3>
            <p className={styles.card__description}>
              Protection of systems and data, vulnerability analysis,
              and best practices in information security.
            </p>
            <div className={styles.card__tags}>
              <span className={styles.tag}>Web Security</span>
              <span className={styles.tag}>Pentesting</span>
              <span className={styles.tag}>Networks</span>
            </div>
          </article>

          <article className={styles.interest__card}>
            <div className={styles.card__icon}>
              <i className="fas fa-brain"></i>
            </div>
            <h3 className={styles.card__title}>Artificial Intelligence</h3>
            <p className={styles.card__description}>
              Machine Learning, Data processing, patron recognition and development of smart
              solutions with Python.
            </p>
            <div className={styles.card__tags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>ML</span>
              <span className={styles.tag}>Data Science</span>
            </div>
          </article>

          <article className={styles.interest__card}>
            <div className={styles.card__icon}>
              <i className="fas fa-database"></i>
            </div>
            <h3 className={styles.card__title}>Data Bases</h3>
            <p className={styles.card__description}>
              Modeling, administration and optimization of relational databases
              and NoSQL.
            </p>
            <div className={styles.card__tags}>
              <span className={styles.tag}>MySQL</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>MongoDB</span>
            </div>
          </article>

          <article className={styles.interest__card}>
            <div className={styles.card__icon}>
              <i className="fas fa-mobile-screen-button"></i>
            </div>
            <h3 className={styles.card__title}>Mobile development</h3>
            <p className={styles.card__description}>
              Develop of native and multi-plataform mobile apps for iOS
            </p>
            <div className={styles.card__tags}>
              <span className={styles.tag}>Swift</span>
              <span className={styles.tag}>SwiftUI</span>
              <span className={styles.tag}>CreateML</span>
            </div>
          </article>

          <article className={styles.interest__card}>
            <div className={styles.card__icon}>
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className={styles.card__title}>Cloud Computing</h3>
            <p className={styles.card__description}>
              Cloud services, scalable architectures and apps deployment.
            </p>
            <div className={styles.card__tags}>
              <span className={styles.tag}>AWS</span>
              <span className={styles.tag}>Azure</span>
              <span className={styles.tag}>Docker</span>
            </div>
          </article>

        </div>

        <div className={styles.subjects}>
          <h3 className={styles.subjects__title}>
            <i className="fas fa-graduation-cap"></i> Relevant Subjects
          </h3>
          <div className={styles.subjects__list}>
            <span className={styles.subject}>OOP</span>
            <span className={styles.subject}>Data Structures</span>
            <span className={styles.subject}>Stochastic Process</span>
            <span className={styles.subject}>Statistics</span>
            <span className={styles.subject}>Software Engineering</span>
            <span className={styles.subject}>Data Bases</span>
            <span className={styles.subject}>Optimization</span>
            <span className={styles.subject}>Web Development</span>
          </div>
        </div>

      </div>
    </section>
  );
}
