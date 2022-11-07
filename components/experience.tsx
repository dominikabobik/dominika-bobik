import { FC, useEffect, useState } from "react"
import Draggable from "react-draggable"
import { IconContext } from "react-icons"
import { FcCrystalOscillator, FcElectronics } from "react-icons/fc"
import styles from "../styles/experienceContent.module.css"

export const ExperienceContents: FC = () => {

  return (
    <div>
      <IconContext.Provider value={{ color: "blue", className: "icons-size" }}>
        <div className={styles.terminalPosition}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.icons}><FcElectronics /></div>
            <div className={styles.textDomi}>Domi</div>
            <div className={styles.textTilda}>~</div>
            <div className={styles.textLambda}>λ</div>
            <div className={styles.textPosition}> Software Engineering Intern,
              <a href={'https://www.microsoft.com/en-us/?ql=2'} className={styles.linkPosition}> Microsoft Corporation</a>
            </div>
          </div>
          <div className={styles.tagContents}>
            <div className={styles.textTerminal}>Created a DNS Proxy that added the DoH (DNS over HTTPS) functionality to the Windows OS increasing overall security.</div>
            <p className={styles.textTerminalTech}>C ◆ C++</p>
          </div>
        </div>

        <div className={styles.terminalPosition}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FcCrystalOscillator />
            <div className={styles.textDomi}>Domi</div>
            <div className={styles.textTilda}>~</div>
            <div className={styles.textLambda}>λ</div>
            <div className={styles.textPosition}> Software Engineering Intern,
              <a href={'https://www.osii.com/'} className={styles.linkPosition}> Open Systems International</a>
            </div>
          </div>
          <div className={styles.tagContents}>
            <p className={styles.textTerminal}>Developed new features for the power outage management system “Compass” for various customers
              ranging from private firms to national electric corporations. Implemented dynamic elements in
              Compass’s map software using the MapBox API while maintaining cross-platform compatibility and a
              positive user experience.</p>
            <p className={styles.textTerminalTech}>Xamarin ◆ .NET ◆ MapBox ◆ HTML/CSS/JavaScript</p>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
} 