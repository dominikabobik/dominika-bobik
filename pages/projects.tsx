import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {NavBar} from "../components/nav-bar";

interface PageProps {

}

const Projects: NextPage<PageProps> = () => {
    return (
        <div>
            <NavBar/>
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
