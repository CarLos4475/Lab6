import Link from 'next/link';
import styles from './Header.module.css';

let HeaderData: string = 'Carlos Emiliano Segura Loera';

export default function Header() {
  return (
    <>
      <header className={styles.header} id="header">
        <nav className={`${styles.nav} container`}>
          <Link href="#home" className={styles.nav__logo}>
            <span className={styles.logo__bracket}>&lt;</span>
            {HeaderData}
            <span className={styles.logo__bracket}>/&gt;</span>
          </Link>

          <input type="checkbox" id="nav-toggle" className={styles.nav__checkbox} />
          <label htmlFor="nav-toggle" className={styles.nav__toggle}>
            <i className="fas fa-bars"></i>
          </label>

          <div className={styles.nav__menu} id="nav-menu">
            <label htmlFor="nav-toggle" className={styles.nav__close}>
              <i className="fas fa-times"></i>
            </label>

            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <label htmlFor="nav-toggle">
                  <Link href="#home" className={styles.nav__link}>Homepage</Link>
                </label>
              </li>
              <li className={styles.nav__item}>
                <label htmlFor="nav-toggle">
                  <Link href="#interests" className={styles.nav__link}>Interests</Link>
                </label>
              </li>
              <li className={styles.nav__item}>
                <label htmlFor="nav-toggle">
                  <Link href="#cv" className={styles.nav__link}>CV</Link>
                </label>
              </li>
              <li className={styles.nav__item}>
                <label htmlFor="nav-toggle">
                  <Link href="#projects" className={styles.nav__link}>Proyects</Link>
                </label>
              </li>
              <li className={styles.nav__item}>
                <label htmlFor="nav-toggle">
                  <Link href="#contact" className={styles.nav__link}>Contac</Link>
                </label>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
