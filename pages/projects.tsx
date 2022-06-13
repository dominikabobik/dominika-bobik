import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/projects.module.css'
import {NavBar} from "../components/nav-bar";
import {project, Project} from "../components/project";

interface PageProps {

}

const Projects: NextPage<PageProps> = () => {
    return (
        <div className={styles.main}>
            <NavBar/>
            <title>Dominika Bobik</title>
                <div className={styles.wrapper}>
                        <body className={styles.contents}>
                                <ul className={styles.lists}>{data.map((item: project, i) =>
                                    <Project key={i} {...item}/>
                                )}</ul>
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
