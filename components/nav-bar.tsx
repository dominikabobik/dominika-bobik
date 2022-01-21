import React from "react";
import {FC} from "react";
import styles from "../styles/nav-bar.module.css";

export const NavBar: FC = () => {
    return(
            <nav className={styles.tags}>
                <a href={'/'}>HOME</a>
                <a href={'/projects'}>PROJECTS</a>
                <a href={'/experience'}>EXPERIENCE</a>
                <a href={'/skills'}>SKILLS</a>
                <a href={'/ResumeDominikaBobik.pdf'}>RESUME</a>
            </nav>
    );
}