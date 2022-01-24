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
    <div className={styles.box}>
      <div className={styles.photobox}>
        <img src={'/photo.jpg'} alt="logo" className={styles.photo}/>
      </div>
      <div className={styles.textbox}>
        <p>
          My name is Dominika. My hometown is Wroclaw, Poland, a city of about half a million people in the south-west part of the country.
          I currently live in Houghton, Michigan in the United States, where I moved to pursue a Bachelor of Science degree in Computer Engineering.
          I take a great pride in representing Michigan Tech as a student-athlete on the Women's Tennis Team.
          <p> Go Huskies!</p>
          <div className={styles.contact}>
            <b>Contact me via</b>
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
        </p>
      </div>

    </div>


  </div>
  )
}
export default Home
