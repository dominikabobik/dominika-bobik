import React from "react";
import { FC } from "react";
import styles from "../styles/nav-bar.module.css";

export const NavBar: FC = () => {
    return (
        <nav className={styles.container}>
            <a href={'/projects'}>
                Projects
            </a>
            <a href={'/experience'}>
                Experience
            </a>
        </nav>
    );
}