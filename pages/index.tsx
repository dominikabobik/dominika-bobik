import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {NavBar} from "../components/nav-bar";

interface PageProps {

}

const Home: NextPage<PageProps> = () => {
  return (
  <div className={styles.text}>
    <NavBar/>
    <img src={'/photo.jpg'} alt="logo" className={styles.photo}/>
    <p>
      Dominika Bobik
    </p>
    <p>
      dbobik@mtu.edu
    </p>
    <p>
      Michigan Technological University
    </p>
    <p>
      Bachelor of Science in Computer Engineering (2023)
    </p>
    <div className={styles.links}>
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
