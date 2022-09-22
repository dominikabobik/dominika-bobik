import { FC, useEffect, useState } from "react"
import Draggable from "react-draggable"
import { IconContext } from "react-icons"
import { FcDocument, FcGlobe, FcGraduationCap, FcHome } from "react-icons/fc"
import { bottomContextType, useGlobalContext } from "../pages"
import styles from "../styles/about.module.css"

export const About: FC = () => {

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
          <div className={styles.circleR} />
          <div className={styles.circleO} />
          <div className={styles.circleG} />
        </div>
        <div className={styles.contents}>
          {/* <div className={styles.imagebox}>
            <img src={'/photo.png'} alt="" className={styles.image} />
          </div> */}
          <IconContext.Provider value={{ color: "blue", className: "iconsTopSection" }}>
            <div className={styles.aboutMe}>
              <div className={styles.tag}>
                <FcGlobe />
                <div className={styles.text}>Currently living in Redmond, WA USA</div>
              </div>
              <div className={styles.tag}>
                <FcGraduationCap></FcGraduationCap>
                <div className={styles.text}>Michigan Technological University</div>
              </div>
              <div className={styles.tag}>
                <FcHome />
                <div className={styles.text}>Wroclaw, Poland</div>
              </div>
              <div className={styles.tag}>
                <FcDocument />
                <a href={'/ResumeDominikaBobik.pdf'} target={"_blank"} rel={"noreferrer"} className={styles.text}>Resume</a>
              </div>

            </div>
          </IconContext.Provider>
        </div>
      </div>
    </Draggable>

  )
}