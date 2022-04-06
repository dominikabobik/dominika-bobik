import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/home.module.css'
import {NavBar} from "../components/nav-bar";

interface PageProps {

}

const Home: NextPage<PageProps> = () => {
  return (
  <div>
    <title>Dominika Bobik</title>
    <div className={styles.wrapper}>
      <NavBar/>
      <div className={styles.box}>
        <div className={styles.imagebox}>
          <img src={'/photo.png'} alt="" className={styles.image}/>
        </div>
        <div className={styles.textbox}>
          <p>
            {"My name is Dominika. My hometown is Wroclaw, Poland, a city of about half a million people in the south-west part of the country. I currently live in Houghton, Michigan in the United States, where I moved to pursue a Bachelor of Science degree in Computer Engineering. I take a great pride in representing Michigan Tech as a student-athlete on the Women's Tennis Team."}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Home
