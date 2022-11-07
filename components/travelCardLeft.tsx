import { FC } from "react"
import styles from '../styles/TravelCardLeft.module.css'

export interface TravelProps {
  title: string;
  image: string;
  time: string;
}

export const TravelCardLeft: FC<TravelProps> = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt='image' className={styles.image}></img>
      <div className={styles.textWrapper}>
        <div>{props.title}</div>
        <div>{props.time}</div>
      </div>
    </div>
  )
}