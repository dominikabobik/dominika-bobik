import { FC, useEffect, useState } from "react"
import { data, Lang } from "./data";
import styles from "../styles/projectsContent.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectsContent: FC = () => {

  return (
    <div className={styles.container}>
      {data.map(project => {
        return (
          <div key={project.title} className={styles.contentWrapper}>
            <div style={{ display: "flex", flexDirection: "row", width: '100%', paddingBottom: '10px' }}>
              <div className={styles.textTitle}>{project.title}</div>
              {project.github && <a style={{ marginLeft: 'auto' }} href={project.github} target={"_blank"} rel={"noreferrer"}>
                <GitHubIcon className={styles.github} />
              </a>}
            </div>
            <div className={styles.tagContents}>
              <div className={styles.textDescription}>{project.description}</div>
              <p className={styles.textTerminalTech}>{project.technologies.map((t, i) => (
                <div key={t} className={styles.technologiesStyling}>
                  {i !== 0 && <p>{'◆'}</p>}
                  <p>{t}</p>
                </div>
              ))}</p>
            </div>
          </div>)
      })}
    </div>
  )
}