import { FC } from "react"
import styles from "../styles/experienceContent.module.css"

export const ExperienceContents: FC = () => {

  return (
    <div className={styles.container}>

      <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"} className={styles.resumeWrapper}>
        <div className={styles.resume}>
          Resume
        </div>
      </a>

      <div className={styles.terminalPosition}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={styles.textPosition}>
            <div className={styles.mobileWrapperPositions}>
              <div>Software Engineer</div>
              <a href={'https://www.microsoft.com/en-us/?ql=2'} className={styles.linkPosition}>Microsoft Corporation</a>
            </div>
            <div style={{ marginLeft: 'auto' }}>2023 - Present</div>
          </div>
        </div>
        <div className={styles.tagContents}>
          <div className={styles.textTerminal}>
            <p>Working on a Cloud Consoles team that manages two Azure services: <b>Serial Console</b> and <b>Cloud Shell.</b></p>
            <p>• Designed and implemented authentication mechanism that allows 21,000+ weekly connections to the service to be made securely.</p>
            <p>• Orchestrated service deployments across 50+ regions in 3 different clouds.</p>
            <p>• Improved service observability by setting up Prometheus metrics collection in AKS clusters along with Grafana dashboard for data visualization.</p>
            <p>• Improved service monitoring which resulted in a better service health and uptime.</p>
            <p>• Followed best Kubernetes practices and made necessary changes to the existing clusters to ensure service security.</p>
            <p>• Mentored 6+ interns during Summer 2024. Provided guidance on career development.</p>
          </div>
          <p className={styles.textTerminalTech}>Rust ◆ TypeScript ◆ Python ◆ Azure ◆ Kubernetes</p>
        </div>
        <div className={styles.tagContents}>
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