import styles from './Projects.module.css';

const ACAVOY_GITHUB = 'https://github.com/DiegoMoctezuma/AcaVoy-';
const ITTA_GITHUB = 'https://github.com/DiegoMoctezuma/ITTA';
const GITHUB_PROFILE = 'https://github.com/CarLos4475';

export default function Projects() {
  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">My Work</span>
          <h2 className="section__title">Featured Projects</h2>
          <p className="section__description"></p>
        </div>

        <div className={styles.projects__grid}>

          {/* Project 1 */}
          <article className={styles.project__card}>
            <div className={styles.project__image}>
              <div className={styles.project__placeholder}>
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className={styles.project__overlay}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href={ACAVOY_GITHUB} target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className={styles.project__content}>
              <h3 className={styles.project__title}>AcaVoy</h3>
              <p className={styles.project__description}>
                Platform made for the FES Acatlan community, it works by creating customized routes based
                on the distance students travek to the faculty.
              </p>
              <div className={styles.project__tech}>
                <span className={styles.tech}>Swift</span>
                <span className={styles.tech}>SwiftUI</span>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className={styles.project__card}>
            <div className={styles.project__image}>
              <div className={styles.project__placeholder}>
                <i className="fas fa-chart-line"></i>
              </div>
              <div className={styles.project__overlay}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href={ITTA_GITHUB} target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className={styles.project__content}>
              <h3 className={styles.project__title}>Itta</h3>
              <p className={styles.project__description}>
                A volunteer app that lets blind people match with volunteers that wants to help someone
                by narrating soccer matches and events
              </p>
              <div className={styles.project__tech}>
                <span className={styles.tech}>Swift</span>
                <span className={styles.tech}>SwiftUI</span>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className={styles.project__card}>
            <div className={styles.project__image}>
              <div className={styles.project__placeholder}>
                <i className="fas fa-robot"></i>
              </div>
              <div className={styles.project__overlay}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className={styles.project__content}>
              <h3 className={styles.project__title}>Pendiente ...</h3>
              <p className={styles.project__description}>
                Intelligent virtual assistant with natural language processing and contextual responses.
              </p>
              <div className={styles.project__tech}>
                <span className={styles.tech}>Python</span>
                <span className={styles.tech}>TensorFlow</span>
                <span className={styles.tech}>Flask</span>
              </div>
            </div>
          </article>

        </div>

        <div className={styles.projects__more}>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <i className="fab fa-github"></i> See more on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
