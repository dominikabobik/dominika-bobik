import {FC} from "react";
import styles from '../styles/skill.module.css'

export interface skill {
	name: string
}

export const Skill: FC<skill> = (props: skill) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.info}>
					<p id="name">{props.name}</p>
				</div>
			</div>
		</div>
	)
}