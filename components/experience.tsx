import { FC, useEffect, useState } from "react"
import Draggable from "react-draggable"
import { IconContext } from "react-icons"
import { FcCrystalOscillator, FcElectronics } from "react-icons/fc"
import { bottomContextType, useGlobalContext } from "../pages"
import styles from "../styles/experience.module.css"

export const Experience: FC = () => {

  const click: bottomContextType = useGlobalContext()
  const [zIndexInternal, setZIndexInternal] = useState(click.zIndex)
  useEffect(() => {
    if (zIndexInternal > click.zIndex) setZIndexInternal(click.zIndex - 1)
  }, [click.zIndex, zIndexInternal])

  return (
    <Draggable
      bounds={'parent'}
      onStart={() => {
        if (click.zIndex > 10) {
          click.setZIndex(1)
          setZIndexInternal(1)
          console.log('loop')
        } else {
          setZIndexInternal(click.zIndex + 1);
          click.setZIndex(click.zIndex + 1);
        }
      }}
    >
      <div className={styles.terminal} style={{ zIndex: zIndexInternal }}>
        <div className={styles.topBar}>
          <div className={styles.circleR} onClick={() => click.setStateExperience(false)}>
          </div>
          <div className={styles.circleO} onClick={() => click.setStateExperience(false)}>
          </div>
          <div className={styles.circleG} />
        </div>
        {/* <div>{`Internal: ${zIndexInternal} global: ${click.zIndex}`}</div> */}
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
      </div>
    </Draggable>
  )
} 