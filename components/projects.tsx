import { FC, useEffect, useState } from "react"
import { data, Lang } from "./data";
import styles from "../styles/projects.module.css"
import { IconContext } from "react-icons";
import Draggable from "react-draggable";
import zIndex from "@mui/material/styles/zIndex";
import { bottomContextType, useGlobalContext } from "../pages";

export const Projects: FC = () => {

  const click: bottomContextType = useGlobalContext()
  const [zIndexInternal, setZIndexInternal] = useState(click.zIndex)
  useEffect(() => {
    if (zIndexInternal > click.zIndex) setZIndexInternal(click.zIndex - 1)
  }, [click.zIndex, zIndexInternal])

  const langs: Record<Lang, { name: string, ext: string }> = {
    "js": { name: "node", ext: "js" },
    "py": { name: "python3", ext: "py" },
    "sh": { name: "bash", ext: "sh" },
    "c": { name: "gcc ", ext: "c -o a.out && ./a.out" },
    "java": { name: "javac ", ext: "java -o a.out && java ./a.out" }
  }

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
          <div className={styles.circleR} onClick={() => click.setStateProjects(false)}>
          </div>
          <div className={styles.circleO} onClick={() => click.setStateProjects(false)}>
          </div>
          <div className={styles.circleG} />
        </div>
        {/* <div>{`Internal: ${zIndexInternal} global: ${click.zIndex}`}</div> */}
        <div className={styles.contents}>
          <IconContext.Provider value={{ color: "blue", className: "icons-size" }}>
            {data.map(project => {
              const lang = langs[project.lang ?? "js"];
              return <div key={project.title} className={styles.terminalPosition}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {project.icon}
                  <div className={styles.textDomi}>Domi</div>
                  <div className={styles.textTilda}>~</div>
                  <div className={styles.textLambda}>λ</div>
                  <div className={styles.textPosition}>{`${lang.name} ./${project.title}.${lang.ext}`}</div>
                </div>
                <div className={styles.tagContents}>
                  <div className={styles.textTerminal}>{project.description}</div>
                  <p className={styles.textTerminalTech}>{project.technologies.map((t, i) => (
                    <div key={t} className={styles.technologiesStyling}>
                      {i !== 0 && <p>{'◆'}</p>}
                      <p>{t}</p>
                    </div>
                  ))}</p>
                </div>
              </div>
            })}
          </IconContext.Provider>
        </div>
      </div>
    </Draggable>
  )
}