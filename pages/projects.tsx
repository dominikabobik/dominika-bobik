import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import styles from '../styles/projects.module.css'

const Projects: NextPage = () => {

  return (
    <div className={styles.container}>
      <About />
      <div className={styles.mainWrapper}>
        <NavBar />
        <div>Hi</div>
      </div>
    </div>
  )
}
export default Projects