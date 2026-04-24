import styles from './Contact.module.css';

const EMAIL_URL = 'mailto:carlos4475segura@gmail.com';

export default function Contact() {
  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className={styles.contact__content}>

          <div className={styles.contact__info}>
            <span className="section__subtitle">Do you have a project?</span>
            <h2 className="section__title">Let&apos;s Talk!</h2>
            <p className={styles.contact__description}>
              I am available for job opportunities, freelance projects, or just to connect. Feel free to reach out!
            </p>

            <div className={styles.contact__data}>

              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.contact__text}>
                  <span className={styles.contact__label}>Email</span>
                  <a href={EMAIL_URL} className={styles.contact__value}>
                    carlos4475segura@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className={styles.contact__text}>
                  <span className={styles.contact__label}>Location</span>
                  <span className={styles.contact__value}>CDMX, México</span>
                </div>
              </div>

              <div className={styles.contact__item}>
                <div className={styles.contact__icon}>
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className={styles.contact__text}>
                  <span className={styles.contact__label}>Availability</span>
                  <span className={`${styles.contact__value} ${styles['contact__value--available']}`}>
                    Available for work
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.contact__cta}>
            <div className={styles.contact__card}>
              <h3 className={styles['contact__card-title']}>Ready to get started?</h3>
              <p className={styles['contact__card-text']}>
                Send me a message and I&apos;ll get back to you as soon as possible.
              </p>
              <a href={EMAIL_URL} className="btn btn--primary btn--large btn--full">
                <i className="fas fa-paper-plane"></i> Send message
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
