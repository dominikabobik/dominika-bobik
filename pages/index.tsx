import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styles from '../styles/home.module.css'
import { NavBar } from "../components/nav-bar";
import { Projects } from "../components/projects"
import { BottomMenu } from '../components/bottom_menu';
import { Experience } from '../components/experience';
import React, { useContext, useState } from 'react';
import { About } from '../components/about';

interface PageProps { }

// Setting context to be used by the bottom buttons
export type bottomContextType = {
  zIndex: number,
  setZIndex: React.Dispatch<React.SetStateAction<number>>,
  stateAbout: boolean,
  setStateAbout: React.Dispatch<React.SetStateAction<boolean>>,
  stateExperience: boolean,
  setStateExperience: React.Dispatch<React.SetStateAction<boolean>>,
  stateProjects: boolean,
  setStateProjects: React.Dispatch<React.SetStateAction<boolean>>
}

export const bottomContext = React.createContext<bottomContextType>({} as bottomContextType);

export const useGlobalContext = () => useContext(bottomContext)

const Home: NextPage<PageProps> = () => {

  const [stateAbout, setStateAbout] = useState(false)
  const [stateExperience, setStateExperience] = useState(false)
  const [stateProjects, setStateProjects] = useState(false)
  const [zIndex, setZIndex] = useState(1)

  return (
    <div>
      <title>Dominika Bobik</title>
      <body>
        <bottomContext.Provider value={{ zIndex, setZIndex, stateAbout, setStateAbout, stateExperience, setStateExperience, stateProjects, setStateProjects }}>
          <div className={styles.wrapper}>
            <NavBar />
            <div className={styles.content}>
              {stateAbout && <About />}
              {stateExperience && <Experience />}
              {stateProjects && <Projects />}
            </div>
            <BottomMenu />
          </div>
        </bottomContext.Provider>
      </body>
    </div>
  )
}
export default Home
