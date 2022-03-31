import {FC} from "react";
import styles from "../styles/project.module.css";
import Image from 'next/image'

export interface project {
	title: string,
	description: string,
	technologies: string[],
	img?: string
}

interface tech {
	technology: string
}

export const Project:FC<project> = (props: project) => {
	const technologies = props.technologies.map((item) =>
		// eslint-disable-next-line react/jsx-key
		<Tech technology={item}/>
	);
	let image;
	if (props.img){
		{/* eslint-disable-next-line @next/next/no-img-element */}
		image =  <img src={props.img} className={styles.image}  alt={'logo'}/>
	}
	else{
		image = <div/>
	}
	return(
		<div className={styles.projectContainer}>
			<h2>{props.title}</h2>
			<p className={styles.description}>{props.description}</p>
			{image}
			<ul className={styles.lists}>{technologies}</ul>
		</div>
	);
}

const Tech:FC<tech> = (props:tech) => {
	return(
		<div className={styles.techContainer}>{props.technology}</div>
	)
}