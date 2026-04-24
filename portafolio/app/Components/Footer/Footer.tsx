import Link from 'next/link';
import styles from './Footer.module.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/carlos-emiliano-segura-loera-b9b809361/';
const GITHUB_URL = 'https://github.com/CarLos4475';
const EMAIL_URL = 'mailto:carlos4475@gmail.com';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="footer">
        <div className="container">
          <div className={styles.footer__content}>
            <div className={styles.footer__brand}>
              <Link href="#" className={styles.footer__logo}>
                <span className={styles.logo__bracket}>&lt;</span>
                Carlos Emiliano Segura Loera
                <span className={styles.logo__bracket}>/&gt;</span>
              </Link>
              <p className={styles.footer__text}>
                Thank you for visiting my portfolio website. Hope we can work together soon!
              </p>
            </div>

            <div className={styles.footer__social}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['footer__social-link']}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['footer__social-link']}
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={EMAIL_URL}
                className={styles['footer__social-link']}
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className={styles.footer__bottom}>
            <p className={styles.footer__copyright}>
              &copy; 2026 Carlos Emiliano Segura Loera. All rights reserved.
            </p>
            <p className={styles.footer__made}>
              Do someone actually is going to read this?
            </p>
          </div>
        </div>
      </footer>

      <Link href="#home" className={styles['scroll-top']} id="scroll-top">
        <i className="fas fa-arrow-up"></i>
      </Link>
    </>
  );
}
