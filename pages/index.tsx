import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/home.module.css'
import {NavBar} from "../components/nav-bar";

interface PageProps {

}

const Home: NextPage<PageProps> = () => {
  return (
  <div>
    <title>Dominika Bobik</title>
    <NavBar/>
    <div className={styles.header}>
      <h2>Dominika Bobik</h2>
    </div>
    <div className={styles.box}>
      <div className={styles.photobox}>
        <img src={'/photo.jpg'} alt="logo" className={styles.photo}/>
      </div>
      <div className={styles.textbox}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <div className={styles.mtubox}>
      <div className={styles.mtutextbox}>
        <p>
          Michigan Technological University
        </p>
        <p>Bachelor of Science in Computer Engineering (2023)</p>
      </div>
      <div className={styles.mtulogo}>
        <img src={'/mtu.png'} alt="logo" className={styles.photo}/>
      </div>
    </div>
    <div className={styles.contact}>
      <b>Contact me!</b>
      <div className={styles.links}>
        <a href="mailto:dominikabobik12@gmail.com">Email</a>
        <a
            href="https://github.com/DomiNika-12"
            target="_blank"
            rel="noopener noreferrer"
        >
          Github
        </a>
        <a
            href="https://www.linkedin.com/in/dominika-bobik/"
            target="_blank"
            rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>

  </div>
  )
}

// export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
//   return {
//     props: {}
//   }
// }

// export const getStaticProps: GetStaticProps<PageProps> = async context => {
//   return {
//     props: {}
//   }
// }

// export const getStaticPaths: GetStaticPaths = async context => {
//   return {
//     paths: [],
//     fallback: false
//   }
// }



export default Home
