import { FC } from "react"
import { IconContext } from "react-icons"
import styles from "../styles/about.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const About: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagebox}>
        <img src={'/profile.jpeg'} alt="Portrait of Dominika Bobik" className={styles.image} />
      </div>

      <div style={{ textAlign: 'center' }}>Dominika Bobik</div>

      <div className={styles.links}>
        <a href="mailto:bobikdominika@gmail.com" aria-label="Email Dominika Bobik" title="Email">
          <MailIcon className={styles.mail} />
        </a>
        <a href="https://github.com/dominikabobik" target={"_blank"} rel={"noreferrer"} aria-label="Dominika Bobik on GitHub" title="GitHub">
          <GitHubIcon className={styles.github} />
        </a>
        <a href="https://www.linkedin.com/in/dominika-bobik/" target={"_blank"} rel={"noreferrer"} aria-label="Dominika Bobik on LinkedIn" title="LinkedIn">
          <LinkedInIcon className={styles.linkedin} />
        </a>
      </div>

      <IconContext.Provider value={{ className: "iconsTopSection" }}>
        <div className={styles.aboutMe}>
          <div className={styles.text}>
            Software Engineer
          </div>
          <div className={styles.text}>
            Vancouver, BC
          </div>
          {/* <div className={styles.tag}>
            <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"} className={styles.text}>Resume</a>
          </div> */}
        </div>
      </IconContext.Provider>



    </div>
  )
}