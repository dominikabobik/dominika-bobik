import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import { NavBar } from "../components/nav-bar";
import React, { useContext, useState } from 'react';
import { About } from '../components/about';
import { BlogContent } from '../components/blogContent';

const Home: NextPage = () => {

  return (
    <div>
      <title>Dominika Bobik</title>
      <body>
        <div className={styles.container}>
          <div className={styles.aboutWrapper}><About /></div>
          <div className={styles.mainWrapper}>
            <NavBar />
            <div className={styles.contentsWrapper}>
              <div className={styles.aboutWrapperMobile}><About /></div>
              <BlogContent />
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}
export default Home
