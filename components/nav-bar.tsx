import React from "react";
import {FC} from "react"
import styles from "../styles/nav-bar.module.css"

export const NavBar: FC = () => {
    return(
            <nav className={styles.tags}>
                <a href={'/'}>Home</a>
                <a href={'/projects'}>Projects</a>
                <a href={'/experience'}>Experience</a>
                <a href={'/skills'}>Skills</a>
            </nav>
    );
}
