import type {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'
import styles from '../styles/home.module.css'
import {NavBar} from "../components/nav-bar";
import { FcGraduationCap } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcDocument} from "react-icons/fc";
import { IconContext } from "react-icons";
import {FcElectronics, FcCrystalOscillator} from "react-icons/fc";

import {data, Lang} from "../components/s-projects";
import { useCallback } from 'react';
interface PageProps {

}



const langs: Record<Lang, {name: string, ext: string}> = {
  "js": {name: "node", ext: "js"},
  "py": {name: "python3", ext: "py"},
  "sh": {name: "bash", ext: "sh"},
  "c": {name: "gcc ", ext: "c -o a.out && ./a.out"},
  "java": {name: "javac ", ext: "java -o a.out && java ./a.out"}
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
            <div className={styles.text}>Currently living in Redmond, WA USA</div>
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

      <div className={styles.test}>
        <div className={styles.terminal}>
          <div className={styles.topBar}>
            <div className={styles.circleR}/>
            <div className={styles.circleO}/>
            <div className={styles.circleG}/>
          </div>
          <div className={styles.contents}>
            <IconContext.Provider value={{color: "blue", className: "icons-size"}}>
              {data.map(project => {
                const lang = langs[project.lang ?? "js"];
                return (<div className={styles.terminalPosition}>
                <div style={{display: "flex", flexDirection: "row" }}>
                  {project.icon}
                  <div className={styles.textDomi}>Domi</div>
                  <div className={styles.textTilda}>~</div>
                  <div className={styles.textLambda}>λ</div>
                  <div className={styles.textPosition}>{`${lang.name} ./${project.title}.${lang.ext}`}</div>
                </div>               
                <div className={styles.tagContents}>   
                  <div className={styles.textTerminal}>{project.description}</div>
                  <p className={styles.textTerminalTech}>{project.technologies.map((t, i) => (
                    <>
                      {i !== 0 && <p>{'◆'}</p>}
                      <p>{t}</p>
                    </>
                  ))}</p>
                </div>
              </div>)})}
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
