import { NextPage } from "next"
import { About } from "../components/about"
import { ProjectsContent } from "../components/projects"
import styles from '../styles/projects.module.css'

const Projects: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.aboutWrapper}><About /></div>
        <div className={styles.contentsWrapper}>
        </div>
      </div>
    </div>
  )
}
export default Projects