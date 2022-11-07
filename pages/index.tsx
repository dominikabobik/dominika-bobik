import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import { NavBar } from "../components/nav-bar";
import React, { useContext, useState } from 'react';
import { About } from '../components/about';

const Home: NextPage = () => {

  return (
    <div>
      <title>Dominika Bobik</title>
      <body>
        <div className={styles.container}>
          <About />
          <div className={styles.mainWrapper}>
            <NavBar />
            <div>Hi</div>
          </div>
        </div>
      </body>
    </div>
  )
}
export default Home
