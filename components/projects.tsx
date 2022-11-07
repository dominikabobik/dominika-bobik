import { FC, useEffect, useState } from "react"
import { data, Lang } from "./data";
import styles from "../styles/projects.module.css"
import { IconContext } from "react-icons";

export const Projects: FC = () => {

  return (
    <div className={styles.terminal}>
      <div className={styles.contents}>
        <IconContext.Provider value={{ color: "blue", className: "icons-size" }}>
          {data.map(project => {
            return <div key={project.title} className={styles.terminalPosition}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {project.icon}
                <div className={styles.textDomi}>Domi</div>
                <div className={styles.textTilda}>~</div>
                <div className={styles.textLambda}>λ</div>
                <div className={styles.textPosition}>{` ./${project.title}`}</div>
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
  )
}