import React, { useEffect, useState } from "react";
import { FC } from "react";
import styles from "../styles/nav-bar.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const NavBar: FC = () => {
    return (
        <nav className={styles.container}>
            <a href={'/'}>
                Blog
            </a>
            <a href={'/travel'}>
                Travel
            </a>
            <a href={'/projects'}>
                Projects
            </a>
            <a href={'/experience'}>
                Experience
            </a>
        </nav>
    );
}