import { FC } from "react"
import { TravelProps } from "./travelCardLeft"
import styles from '../styles/TravelCardRight.module.css'

export const TravelCardRight: FC<TravelProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div>{props.title}</div>
        <div>{props.time}</div>
      </div>
      <img src={props.image} alt='image' className={styles.image}></img>
    </div>
  )
}