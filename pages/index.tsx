import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/home.module.css'
import {NavBar} from "../components/nav-bar";
import Projects from './projects';
import { FcGraduationCap } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcDocument} from "react-icons/fc";
import { IconContext } from "react-icons";
import {FcElectronics} from "react-icons/fc";
import { FcCrystalOscillator } from "react-icons/fc";
interface PageProps {

}

const Home: NextPage<PageProps> = () => {
  return (
  <div>
    <title>Dominika Bobik</title>
    <body>
    <div className={styles.wrapper}>
      <NavBar/>

      <div className={styles.box}>
        <div className={styles.imagebox}>
          <img src={'/photo.png'} alt="" className={styles.image}/>
        </div>

        <IconContext.Provider value={{color: "blue", className: "icons-size"}}>
        <div className={styles.aboutMe}>
          <div className={styles.tag}>
          <FcGlobe/>
            <div className={styles.text}>Currently</div>
            <div className={styles.text}>living in Redmond, WA USA</div>
          </div>
          <div className={styles.tag}>
            <FcGraduationCap></FcGraduationCap>
            <div className={styles.text}>Michigan Technological University</div>
          </div>
          <div className={styles.tag}>
            <FcHome/>
            <div className={styles.text}>Wroclaw, Poland</div>
          </div>
          <div className={styles.tag}>
            <FcDocument/>
            <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"} className={styles.text}>Resume</a>
          </div>
          
        </div>
        </IconContext.Provider>
      </div>
      <div className={styles.test}>
        <div className={styles.terminal}>
          <div className={styles.topBar}>
            <div className={styles.circleR}/>
            <div className={styles.circleO}/>
            <div className={styles.circleG}/>
          </div>
          <div className={styles.contents}>
            <IconContext.Provider value={{color: "blue", className: "icons-size"}}>
              <div className={styles.terminalPosition}>
                <div style={{display: "flex", flexDirection: "row" }}>
                  <FcElectronics/>
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
                <div style={{display: "flex", flexDirection: "row" }}>
                <FcCrystalOscillator/>
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
        </div>
      </div>
    </div>
    </body>
  </div>
  )
}
export default Home
