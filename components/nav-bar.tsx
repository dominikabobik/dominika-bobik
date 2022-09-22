import React, { useEffect, useState } from "react";
import { FC } from "react";
import styles from "../styles/nav-bar.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const NavBar: FC = () => {
    const time1 = new Date().toLocaleTimeString()

    const [time, setTime] = useState(time1);

    const update = () => {
        let time = new Date().toLocaleTimeString()
        setTime(time)
    }

    setInterval(update, 1000)

    return (
        <nav className={styles.container}>
            <div className={styles.timer}>{time}</div>
            <div className={styles.links}>
                <a href="mailto:dominikabobik12@gmail.com" target={"_blank"} rel={"noreferrer"}>
                    <MailIcon className={styles.mail} />
                </a>
                <a href="https://github.com/DomiNika-12" target={"_blank"} rel={"noreferrer"}>
                    <GitHubIcon className={styles.github} />
                </a>
                <a href="https://www.linkedin.com/in/dominika-bobik/" target={"_blank"} rel={"noreferrer"}>
                    <LinkedInIcon className={styles.linkedin} />
                </a>
            </div>
        </nav>
    );
}