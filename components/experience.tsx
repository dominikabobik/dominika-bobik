import { FC } from "react"
import styles from "../styles/experienceContent.module.css"

export const ExperienceContents: FC = () => {

  return (
    <div className={styles.container}>

      <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"} className={styles.resumeWrapper}>
        <div className={styles.resume}>
          Resume
        </div></a>

      <div className={styles.terminalPosition}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={styles.textPosition}>
            <div className={styles.mobileWrapperPositions}>
              <div>Software Engineer</div>
              <a href={'https://www.microsoft.com/en-us/?ql=2'} className={styles.linkPosition}>Microsoft Corporation</a>
            </div>
            <div style={{ marginLeft: 'auto' }}>2023</div>
          </div>
        </div>
        <div className={styles.tagContents}>
          {/* <div className={styles.textTerminal}>TBA</div>
          <p className={styles.textTerminalTech}>TBA</p> */}
        </div>
      </div>

      <div className={styles.terminalPosition}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={styles.textPosition}>
            <div className={styles.mobileWrapperPositions}>
              <div>Software Engineer Intern</div>
              <a href={'https://www.microsoft.com/en-us/?ql=2'} className={styles.linkPosition}>Microsoft Corporation</a>
            </div>
            <div style={{ marginLeft: 'auto' }}>2022</div>
          </div>
        </div>
        <div className={styles.tagContents}>
          <div className={styles.textTerminal}>Created a DNS Proxy that added the DoH (DNS over HTTPS) functionality to the Windows OS increasing overall security.</div>
          <p className={styles.textTerminalTech}>C ◆ C++</p>
        </div>
      </div>

      <div className={styles.terminalPosition}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={styles.textPosition}>
            <div className={styles.mobileWrapperPositions}>
              <div>Software Engineer Intern</div>
              <a href={'https://www.osii.com/'} className={styles.linkPosition}>Open Systems International</a>
            </div>
            <div style={{ marginLeft: 'auto' }}>2021</div>
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
    </div>
  )
} 