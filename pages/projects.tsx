import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import { ProjectsContent } from "../components/projects"
import styles from '../styles/projects.module.css'

const Projects: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.aboutWrapper}><About /></div>
      <div className={styles.mainWrapper}>
        <NavBar />
        <div className={styles.contentsWrapper}>
          <ProjectsContent />
        </div>
      </div>
    </div>
  )
}
export default Projects