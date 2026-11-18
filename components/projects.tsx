import { FC } from "react"
import styles from "../styles/projectsContent.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import { data } from "./data";

export const ProjectsContent: FC<{ variant?: 'cards' | 'list' }> = ({ variant = 'cards' }) => {

  if (variant === 'list') {
    return (
      <ul className={styles.projectList}>
        {data.map(project => (
          <li key={project.title} className={styles.projectListItem}>
            {project.github ? (
              <a className={styles.projectLink} href={project.github} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            ) : <span className={styles.textTitle}>{project.title}</span>}
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.projectTechnologies}>{project.technologies.join(' · ')}</p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={styles.container}>
      {data.map(project => {
        return (
          <a key={project.title} className={styles.contentWrapper} href={project.github} target={"_blank"} rel={"noreferrer"}>
            <div style={{ display: "flex", flexDirection: "row", width: '100%', paddingBottom: '10px' }}>
              <div className={styles.textTitle}>{project.title}</div>
              <GitHubIcon style={{ marginLeft: 'auto' }} className={styles.github} />
            </div>
            <div className={styles.tagContents}>
              <div className={styles.textDescription}>{project.description}</div>
              <div className={styles.textTerminalTech}>{project.technologies.map((t, i) => (
                <div key={t} className={styles.technologiesStyling}>
                  {i !== 0 && <p>{'◆'}</p>}
                  <p>{t}</p>
                </div>
              ))}</div>
            </div>
          </a>)
      })}
    </div >
  )
}