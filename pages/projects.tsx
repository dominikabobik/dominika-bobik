import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/projects.module.css'
import {NavBar} from "../components/nav-bar";
import {project, Project} from "../components/project";

interface PageProps {

}

const data: project[] = [
        {
                title: 'Resistor Color Decoder',
                description: 'Made a web app that finds color code based on the resistance of the basic circuit component.',
                technologies: ['TypeScript','React Native', 'Expo'],
                img: '/crk.png'
        },
        {
                title: 'Tic Tac Toe',
                description: 'Created a console-run tic tac toe game for 2 players using C++.',
                technologies: ['C++'],
                img: ''
        },
        {
                title: 'Travel App',
                description: 'Created a Xamarin Forms app that integrated an SQLite database, which allows users to enter the name of the city visited, country, and continent.',
                technologies: ['C#', 'Xamarin Forms', 'SQLite'],
                img: ''
        },
        {
                title: 'Snowflakes',
                description: 'Made a JavaFX application that produces window filled with randomly generated snowflakes.',
                technologies: ['Java','JavaFX'],
                img: '/snowflake.jpg'
        },
        {
                title: 'Calculator App',
                description: 'Wrote an android application in Java that performs 12 distinct mathematical operations. Designed a scalable, vertical\n' +
                    '         layout that is more suitable than the default one.',
                technologies: ['Android Studio', 'Java'],
                img: '/calculator.jpg'
        },
        {
                title: 'Robotics Systems Enterprise',
                description: 'Worked on development and implementation of autonomous driving and leader following behavior in the 6 robot (Clearpath Jackals) convoy utilizing ROS.',
                technologies: ['ROS', 'Python'],
                img: ''
        },
        {
                title: 'Blue Marble Security Enterprise',
                description: 'Worked on a team of software engineering students focusing on implementing  autonomous pathfinding into a testing robot using the Robot Operating System (ROS), utilizing C++ and Python. Provided community outreach and educated the team on circuit design and soldering techniques.',
                technologies: ['ROS', 'C++', 'Python'],
                img: ''
        },
];

const projects = data.map((item: project, i) =>
   <Project title={item.title} description={item.description} technologies={item.technologies} img={item.img} key={i}/>
);

const Projects: NextPage<PageProps> = () => {
    return (
        <div className={styles.main}>
            <NavBar/>
            <title>Dominika Bobik</title>
                <div className={styles.wrapper}>
                        <body className={styles.contents}>
                                <ul className={styles.lists}>{projects}</ul>
                        </body>
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



export default Projects
