import { FC } from "react";
import { bottomContextType, useGlobalContext } from "../pages";
import styles from "../styles/bottomMenu.module.css"
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

export const BottomMenu: FC = () => {
  const click: bottomContextType = useGlobalContext()

  return (<div className={styles.container}>
    <div className={styles.wrapper}>
      <button className={styles.tab} onClick={() => { click.setStateAbout(!click.stateAbout) }}>
        <PersonIcon className={styles.icon} />
      </button>
      <button className={styles.tab} onClick={() => { click.setStateExperience(!click.stateExperience) }}>
        <WorkOutlineOutlinedIcon className={styles.icon} />
      </button>
      <button className={styles.tab} onClick={() => { click.setStateProjects(!click.stateProjects) }}>
        <CodeOutlinedIcon className={styles.icon} />
      </button>
    </div>
  </div>
  )
}