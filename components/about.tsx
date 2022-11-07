import { FC, useEffect, useState } from "react"
import Draggable from "react-draggable"
import { IconContext } from "react-icons"
import { FcDocument, FcGlobe, FcGraduationCap, FcHome } from "react-icons/fc"
import styles from "../styles/about.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const About: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagebox}>
        <img src={'/profile.jpg'} alt="" className={styles.image} />
      </div>

      <div>Dominika Bobik</div>

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

      <IconContext.Provider value={{ className: "iconsTopSection" }}>
        <div className={styles.aboutMe}>
          <div className={styles.tag}>
            <div className={styles.text}>
              Software engineer based in Seattle.
            </div>
          </div>
          <div className={styles.tag}>
            <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"} className={styles.text}>Resume</a>
          </div>
        </div>
      </IconContext.Provider>



    </div>
  )
}