import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/projects.module.css'
import {NavBar} from "../components/nav-bar";

interface PageProps {

}

const Projects: NextPage<PageProps> = () => {
    return (
        <div>
            <NavBar/>
            <title>Dominika Bobik</title>
            <body className={styles.contents}>
            <h2>Resistor Color Decoder</h2>
            <p>Made a web app that finds color code based on the resistance of the basic circuit component.</p>
            <p>Technologies: TypeScript, React Native, Expo</p>
            <h2>Calculator App</h2>
            <p>Wrote an android application in Java that performs 12 distinct mathematical operations. Designed a scalable, vertical
                layout that is more suitable than the default one.</p>
            <p>Technologies: Android Studio, Java</p>
            <h2>Blue Marble Security Enterprise</h2>
            <p>Worked on a team of software engineering students focusing on implementing autonomous pathfinding into a testing
                robot using the Robot Operating System (ROS) written in C++ and Python.</p>
            <p>Provided community outreach and educated the team on circuit design and soldering techniques.</p>
            </body>
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



export default Projects
