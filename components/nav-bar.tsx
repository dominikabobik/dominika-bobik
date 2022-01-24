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
                <div className={styles.links}>
                    <a href="mailto:dominikabobik12@gmail.com">Email</a>
                    <a
                        href="https://github.com/DomiNika-12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Github</a>
                    <a
                        href="https://www.linkedin.com/in/dominika-bobik/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >LinkedIn</a>
                </div>
            </nav>
    );
}