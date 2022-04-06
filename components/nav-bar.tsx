import React from "react";
import {FC} from "react";
import styles from "../styles/nav-bar.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const NavBar: FC = () => {
    return(
            <nav className={styles.container}>
                <a href={'/'}>HOME</a>
                <a href={'/projects'}>PROJECTS</a>
                <a href={'/experience'}>EXPERIENCE</a>
                <a href={'/skills'}>SKILLS</a>
                <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"}>RESUME</a>
                <div className={styles.links}>
                    <a href="mailto:dominikabobik12@gmail.com" target={"_blank"} rel={"noreferrer"}>
                        <MailIcon className={styles.mail}/>
                    </a>
                    <a href="https://github.com/DomiNika-12" target={"_blank"} rel={"noreferrer"}>
                        <GitHubIcon className={styles.github}/>
                    </a>
                    <a href="https://www.linkedin.com/in/dominika-bobik/" target={"_blank"} rel={"noreferrer"}>
                        <LinkedInIcon className={styles.linkedin}/>
                    </a>
                </div>
            </nav>
    );
}