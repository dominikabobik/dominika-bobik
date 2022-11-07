import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import styles from '../styles/blog.module.css'

const Blog: NextPage = () => {

  return (
    <div className={styles.container}>
      <About />
      <div className={styles.mainWrapper}>
        <NavBar />
        <div></div>
      </div>
    </div>
  )
}
export default Blog