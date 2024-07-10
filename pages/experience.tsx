import { NextPage } from "next"
import { About } from "../components/about"
import { ExperienceContents } from "../components/experience"
import { NavBar } from "../components/nav-bar"
import styles from '../styles/experience.module.css'

const Experience: NextPage = () => {

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.mainWrapper}>
        <div className={styles.aboutWrapper}><About /></div>
        <div className={styles.contentsWrapper}>
          <ExperienceContents />
        </div>
      </div>
    </div>
  )
}
export default Experience