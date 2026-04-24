import styles from './CV.module.css';

const CV_URL = 'https://carlos4475.github.io/Lab05CarlosEmilianoSeguraLoera/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/carlos-emiliano-segura-loera-b9b809361/';
const GITHUB_URL = 'https://github.com/CarLos4475';
const EMAIL_URL = 'mailto:carlos4475segura@gmail.com';

export default function CV() {
  return (
    <section className={`${styles.cv} section`} id="cv">
      <div className="container">
        <div className={styles.cv__content}>

          <div className={styles.cv__info}>
            <span className="section__subtitle">Learn about my career path</span>
            <h2 className="section__title">My CV</h2>
            <p className={styles.cv__description}>
              Download my CV to know my academic background, skills techniques and experience.
              You can also connect with me on my professional networks.
            </p>

            <div className={styles.cv__buttons}>
              <a href={CV_URL} className="btn btn--primary btn--large">
                <i className="fas fa-download"></i> Download CV
              </a>
              <a href="#" className="btn btn--secondary btn--large">
                <i className="fas fa-eye"></i> See digital CV
              </a>
            </div>
          </div>

          <div className={styles.cv__social}>
            <h3 className={styles['cv__social-title']}>Let&apos;s connect</h3>
            <div className={styles['cv__social-links']}>

              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className={styles.social__info}>
                  <span className={styles.social__name}>LinkedIn</span>
                  <span className={styles.social__user}>@Carlos Emiliano Segura Loera</span>
                </div>
                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
              </a>

              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                  <i className="fab fa-github"></i>
                </div>
                <div className={styles.social__info}>
                  <span className={styles.social__name}>GitHub</span>
                  <span className={styles.social__user}>@CarLos4475</span>
                </div>
                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
              </a>

              <a href={EMAIL_URL} className={styles.social__card}>
                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.social__info}>
                  <span className={styles.social__name}>Email</span>
                  <span className={styles.social__user}>carlos4475segura@gmail.com</span>
                </div>
                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
