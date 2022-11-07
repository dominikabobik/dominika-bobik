import { FcCrystalOscillator, FcEngineering, FcAndroidOs, FcCircuit, FcChargeBattery, FcLibrary, FcMindMap } from "react-icons/fc";
import { ReactNode } from 'react';

export type Lang = "js" | "py" | "sh" | "c" | "java"

export interface project {
	title: string,
	description: string,
	technologies: string[],
	github?: string,
	img?: string,
	icon: ReactNode,
	lang?: Lang
}

export const data: project[] = [
	{
		title: 'DBank',
		description: 'Created a commandline based banking application using Supabase as a database of choice.',
		technologies: ['JavaScript', 'Supabase'],
		github: 'https://github.com/DomiNika-12/dbank',
		img: '',
		icon: <FcLibrary />,
		lang: "js"
	},
	{
		title: 'eeAID',
		description: 'Made a progressive web app that finds color code based on the resistance of the basic circuit component and does calculations commonly used by electrical engineers.',
		technologies: ['TypeScript', 'React Native', 'Expo'],
		github: 'https://github.com/DomiNika-12/circuits',
		img: '/crk.png',
		icon: <FcCrystalOscillator />,
		lang: "js"
	},
	{
		title: 'Tic Tac Toe',
		description: 'Created a console-run tic tac toe game for 2 players using C++.',
		technologies: ['C++'],
		github: 'https://github.com/DomiNika-12/TicTacToe',
		img: '',
		icon: <FcEngineering />,
		lang: "c"
	},
	{
		title: 'Travel App',
		description: 'Created a Xamarin Forms app that integrated an SQLite database, which allows users to enter the name of the city visited, country, and continent.',
		technologies: ['C#', 'Xamarin Forms', 'SQLite'],
		github: 'https://github.com/DomiNika-12/Travel',
		img: '',
		icon: <FcCircuit />
	},
	{
		title: 'Snowflakes',
		description: 'Made a JavaFX application that produces window filled with randomly generated snowflakes.',
		technologies: ['Java', 'JavaFX'],
		github: 'https://github.com/DomiNika-12/Snowflakes',
		img: '/snowflake.jpg',
		icon: <FcMindMap />,
		lang: "java"
	},
	{
		title: 'Calculator App',
		description: 'Wrote an android application in Java that performs 12 distinct mathematical operations. Designed a scalable, vertical\n' +
			'         layout that is more suitable than the default one.',
		technologies: ['Android Studio', 'Java'],
		github: 'https://github.com/DomiNika-12/Calculator',
		img: '/calculator.jpg',
		icon: <FcAndroidOs />
	},
	{
		title: 'Robotics Systems Enterprise',
		description: 'Worked on development and implementation of autonomous driving and leader following behavior in the 6 robot (Clearpath Jackals) convoy utilizing ROS.',
		technologies: ['ROS', 'Python'],
		github: 'https://rse.mtu.edu/',
		img: '/rse.png',
		icon: <FcChargeBattery />
	},
	{
		title: 'Blue Marble Security Enterprise',
		description: 'Worked on a team of software engineering students focusing on implementing  autonomous pathfinding into a testing robot using the Robot Operating System (ROS), utilizing C++ and Python. Provided community outreach and educated the team on circuit design and soldering techniques.',
		technologies: ['ROS', 'C++', 'Python'],
		github: 'https://bluemarblesecurity.eit.mtu.edu/index.php',
		img: '/bluemarble.jpeg',
		icon: <FcCrystalOscillator />
	},
];

export const skills: Record<string, string[]> = {
	'Programming Languages': [
		'C/C++',
		'C#',
		'Java',
		'JavaScript',
		'TypeScript',
		'MIPS/Nios',
		'Verilog HDL'
	],
	'Software': [
		'Git',
		'ROS',
		'AWS',
		'Virtual Box',
		'MATLAB'
	],
	'Management': [
		'SCRUM/Agile',
		'Microsoft Office',
		'Google GSuite'
	],
	'Foreign Languages': [
		'English',
		'Polish',
		'German'
	]
};

export interface ResearchExperience {
	position: string,
	projectTitle: string,
	description: string,
	link?: string
}

export const experiences: ResearchExperience[] = [
	{
		position: 'Undergraduate Research Assistant',
		projectTitle: '“Autonomy in robotics systems“',
		description: 'Researched concepts crucial for robotics. Learned basis of ROS navigation stack. Debugged undesired robot behavior using RViz. Wrote the documentation.',
		link: '/FinalReport.pdf'
	},
	{
		position: 'Undergraduate Research Assistant',
		projectTitle: '“Towards Secure Decentralized Cloud Storage by Leveraging Blockchain Technology”',
		description: 'Researched error-correcting codes that are suitable for flash memory in a decentralized cloud architecture. Implemented polar encoding for data storage in flash memory.',
		link: "https://snp.cs.mtu.edu/"
	},
	{
		position: 'Undergraduate Research Assistant',
		projectTitle: '“Ensuring Security of the Internet of Things Network”',
		description: 'Led a research study in cloud system security focusing on the software stack provided by Amazon Web Services (AWS). The study was focused on the security aspects of IoT,and routing protocols provided by AWS and how other technologies can be adapted to IoT environments.',
		link: "https://snp.cs.mtu.edu/"
	},
	{
		position: 'Undergraduate Research Assistant',
		projectTitle: '“Mechanical Stimulation of Cardiomyocytes Seeded on the Carbon Nanotube ForestScaffold for Producing Mature and Functional Cells”',
		description: 'Using Siemens NX designed a custom device that provided dual electrical and mechanical stimuli to the cells.',
		link: '/URIP2020Project.pdf'
	}

];

export const dataTravel = [
	{
		title: 'Houghton, MI USA',
		image: './houghtonAurora.jpeg',
		time: 'Fall 2022'
	},
	{
		title: 'Rome, Italy',
		image: './rome.JPG',
		time: 'Summer 2022'
	},
	{
		title: 'Amalfi Coast, Italy',
		image: './amalfiCoast.jpeg',
		time: 'Summer 2022'
	},
	{
		title: 'San Francisco, CA USA',
		image: './sf.jpeg',
		time: 'Summer 2022'
	},
	{
		title: 'Sicily, Italy',
		image: './erice.jpeg',
		time: 'Spring 2022'
	},
	{
		title: 'Miami, FL USA',
		image: './miami.jpeg',
		time: 'Summer 2021'
	}
]