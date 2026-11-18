import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import { About } from '../components/about';
import { ExperienceContents } from '../components/experience';
import { ProjectsContent } from '../components/projects';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <main className={styles.mainWrapper}>
        <div className={styles.aboutWrapper}><About /></div>
        <div className={styles.contentsWrapper}>
          <div className={styles.aboutWrapperMobile}><About /></div>
          <section aria-labelledby="experience-heading" className={styles.section}>
            <h1 id="experience-heading" className={styles.sectionHeading}>Experience</h1>
            <ExperienceContents />
          </section>
          <section aria-labelledby="projects-heading" className={styles.section}>
            <h2 id="projects-heading" className={styles.sectionHeading}>Projects</h2>
            <ProjectsContent variant="list" />
          </section>
        </div>
      </main>
    </div>
  )
}
export default Home
