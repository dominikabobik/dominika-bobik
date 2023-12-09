import { ReactNode } from 'react';

export type Lang = "js" | "py" | "sh" | "c" | "java"

export interface project {
	title: string,
	description: string,
	technologies: string[],
	github?: string,
	img?: string,
	icon?: ReactNode,
	lang?: Lang
}

export const data: project[] = [
	{
		title: 'Modeler',
		description: 'A modeling tool for the K-12 students that teaches computational thinking,',
		technologies: ['Typescript', 'React', 'Next', 'Supabase'],
		github: 'https://modeler-mtu.vercel.app/',
		img: '',
		lang: "js"
	},
	{
		title: 'Wavecolor',
		description: 'Simple app that converts the wavelenght into the corresponing color visible to human eye.',
		technologies: ['Typescript', 'React', 'Next'],
		github: 'https://github.com/DomiNika-12/wave-color',
		img: '',
		lang: "js"
	},
	{
		title: 'Cookbook',
		description: 'Created a website that collects all the recpies important to my family in one place.',
		technologies: ['Typescript', 'React', 'Next'],
		github: 'https://github.com/DomiNika-12/cookbook',
		img: '',
		lang: "js"
	},
	{
		title: 'ChatApp',
		description: 'Created a multithreaded commandline chat app, that uses UNIX sockets.',
		technologies: ['C++'],
		github: 'https://github.com/DomiNika-12/chatApp',
		img: '',
		lang: "c"
	},
	{
		title: 'Huffman Encoding',
		description: 'Wrote a program that compressed files using huffman encoding.',
		technologies: ['C++'],
		github: 'https://github.com/DomiNika-12/HuffmanEncoding',
		img: '',
		lang: "c"
	},
	{
		title: 'Luhn Algorithm',
		description: 'Wrote a program that computes checksum and validates input using Luhn algorithm',
		technologies: ['C++'],
		github: 'https://github.com/DomiNika-12/luhn',
		img: '',
		lang: "c"
	},
	{
		title: 'WCE',
		description: 'Created a website for a Wireless Communication Enterprise, student organization at Michigan Technological University.',
		technologies: ['TypeScript', 'React', 'Next'],
		github: 'https://github.com/DomiNika-12/wce',
		img: '',
		lang: "js"
	},
	{
		title: 'DBank',
		description: 'Created a commandline based banking application using Supabase as a database of choice.',
		technologies: ['JavaScript', 'Supabase'],
		github: 'https://github.com/DomiNika-12/dbank',
		img: '',
		lang: "js"
	},
	{
		title: 'eeAID',
		description: 'Made a progressive web app that finds color code based on the resistance of the basic circuit component and does calculations commonly used by electrical engineers.',
		technologies: ['TypeScript', 'React Native', 'Expo'],
		github: 'https://github.com/DomiNika-12/circuits',
		img: '/crk.png',
		lang: "js"
	},
	{
		title: 'Tic Tac Toe',
		description: 'Created a console-run tic tac toe game for 2 players using C++.',
		technologies: ['C++'],
		github: 'https://github.com/DomiNika-12/TicTacToe',
		img: '',
		lang: "c"
	},
	{
		title: 'Travel App',
		description: 'Created a Xamarin Forms app that integrated an SQLite database, which allows users to enter the name of the city visited, country, and continent.',
		technologies: ['C#', 'Xamarin Forms', 'SQLite'],
		github: 'https://github.com/DomiNika-12/Travel',
		img: '',
	},
	{
		title: 'Snowflakes',
		description: 'Made a JavaFX application that produces window filled with randomly generated snowflakes.',
		technologies: ['Java', 'JavaFX'],
		github: 'https://github.com/DomiNika-12/Snowflakes',
		img: '/snowflake.jpg',
		lang: "java"
	},
	{
		title: 'Calculator App',
		description: 'Wrote an android application in Java that performs 12 distinct mathematical operations. Designed a scalable, vertical\n' +
			'         layout that is more suitable than the default one.',
		technologies: ['Android Studio', 'Java'],
		github: 'https://github.com/DomiNika-12/Calculator',
		img: '/calculator.jpg',
	},
];

// {
// 	title: 'Robotics Systems Enterprise',
// 		description: 'Worked on development and implementation of autonomous driving and leader following behavior in the 6 robot (Clearpath Jackals) convoy utilizing ROS.',
// 			technologies: ['ROS', 'Python'],
// 				github: 'https://rse.mtu.edu/',
// 					img: '/rse.png',
// 						icon: <FcChargeBattery />
// },
// {
// 	title: 'Blue Marble Security Enterprise',
// 		description: 'Worked on a team of software engineering students focusing on implementing  autonomous pathfinding into a testing robot using the Robot Operating System (ROS), utilizing C++ and Python. Provided community outreach and educated the team on circuit design and soldering techniques.',
// 			technologies: ['ROS', 'C++', 'Python'],
// 				github: 'https://bluemarblesecurity.eit.mtu.edu/index.php',
// 					img: '/bluemarble.jpeg',
// 						icon: <FcCrystalOscillator />
// },

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

export interface BlogPostData {
	title: string,
	date: string,
	description: string,
	img?: string
}

export const blogPosts: BlogPostData[] = [
	{
		title: 'Graduation - B.S. in Computer Engineering',
		date: '4/30/23',
		description: '',
		img: '/graduation.jpeg'
	},
	{
		title: '1st place in the Computing[MTU] poster session',
		date: '10/10/22',
		description: '',
		img: '/posterSession(2).jpg'
	},
	{
		title: 'Starting the last year of an undergraduate degree',
		date: '8/29/22',
		description: '',
	},
	{
		title: 'Awarded an Undergraduate Research Internship Program (URIP)',
		date: '5/30/22',
		description: '',
	}
]

export const travelMarkers = [
	{
		lon: 21.16,
		lat: 86.85,
		city: 'Cancun',
		country: 'Mexico'
	},
	{
		lon: -77.04,
		lat: 38.90,
		city: 'Washington DC',
		country: 'USA'
	},
	{
		lon: 17.03,
		lat: 51.11,
		city: 'Wroclaw',
		country: 'Poland'
	},
	{
		lon: 17.7216,
		lat: 48.3944,
		city: 'Trnava',
		country: 'Slovakia'
	},
	{
		lon: 14.2133,
		lat: 45.7750,
		city: 'Postojna',
		country: 'Slovenia'
	},
	{
		lon: 10.7069,
		lat: 35.2965,
		city: 'El Jam',
		country: 'Tunisia'
	},
	{
		lon: 14.2681,
		lat: 40.8518,
		city: 'Naples',
		country: 'Italy'
	},
	{
		lon: 16.9252,
		lat: 52.4064,
		city: 'Poznan',
		country: 'Poland'
	},
	{
		lon: 18.0084,
		lat: 53.1235,
		city: 'Bydgoszcz',
		country: 'Poland'
	},
	{
		lon: 18.5984,
		lat: 53.0138,
		city: 'Torun',
		country: 'Poland'
	},
	{
		lon: 14.5528,
		lat: 53.4285,
		city: 'Szczecin',
		country: 'Poland'
	},
	{
		lon: 23.1688,
		lat: 53.1325,
		city: 'Bialystok',
		country: ':Poland'
	},
	{
		lon: 18.6466,
		lat: 54.3520,
		city: 'Gdansk',
		country: 'Poland'
	},
	{
		lon: -122.4194,
		lat: 37.7749,
		city: 'San Francisco',
		country: 'USA'
	},
	{
		lon: 2.352222,
		lat: 48.856613,
		city: 'Paris',
		country: 'France'
	},
	{
		lon: -0.127758,
		lat: 51.507351,
		city: 'London',
		country: 'England'
	},
	{
		lon: 13.058540,
		lat: 52.396149,
		city: 'Potsdam',
		country: 'Germany'
	},
	{
		lon: 16.373819,
		lat: 48.208176,
		city: 'Vienna',
		country: 'Austria'
	},
	{
		lon: 14.437800,
		lat: 50.075539,
		city: 'Prague',
		country: 'Czech'
	},
	{
		lon: 19.024673,
		lat: 47.497981,
		city: 'Budapest',
		country: 'Hungary'
	},
	{
		lon: 21.0122,
		lat: 52.2297,
		city: 'Warsaw',
		country: 'Poland'
	},
	{
		lon: 12.4964,
		lat: 41.9028,
		city: 'Rome',
		country: 'Italy'
	},
	{
		lon: -58.3816,
		lat: -34.6037,
		city: 'Buenos Aires',
		country: 'Argentina'
	},
	{
		lon: -80.1918,
		lat: 25.7617,
		city: 'Miami',
		country: 'USA'
	},
	{
		lon: -122.3321,
		lat: 47.6062,
		city: 'Seattle',
		country: 'USA'
	},
	{
		lon: -123.1207,
		lat: 49.2827,
		city: 'Vancouver',
		country: 'USA'
	},
	{
		lon: -118.2437,
		lat: 34.0522,
		city: 'Los Angeles',
		country: 'USA'
	},
	{
		lon: -88.5694,
		lat: 47.1211,
		city: 'Houghton',
		country: 'USA'
	},
	{
		lon: 13.8496,
		lat: 44.8666,
		city: 'Pula',
		country: 'Croatia'
	},
	{
		lon: 12.3155,
		lat: 45.4408,
		city: 'Venice',
		country: 'Italy'
	},
	{
		lon: 17.1077,
		lat: 48.1486,
		city: 'Bratislava',
		country: 'Slovakia'
	},
	{
		lon: 7.9215,
		lat: 46.6054,
		city: 'Wengen',
		country: 'Switzerland'
	},
	{
		lon: 13.3615,
		lat: 38.1157,
		city: 'Palermo',
		country: 'Italy'
	},
	{
		lon: 14.8669,
		lat: 55.1604,
		city: 'Bornholm',
		country: 'Denmark'
	},
	{
		lon: -0.4907,
		lat: 38.3460,
		city: 'Alicante',
		country: 'Spain'
	},
	{
		lon: -80.7526,
		lat: 32.2163,
		city: 'Hilton Head Island',
		country: 'USA'
	},
	{
		lon: -87.6298,
		lat: 41.8781,
		city: 'Chicago',
		country: 'USA'
	},
	{
		lon: -83.0458,
		lat: 42.3314,
		city: 'Detroit',
		country: 'USA'
	},
	{
		lon: -85.6206,
		lat: 44.7631,
		city: 'Traverse City',
		country: 'USA'
	},
	{
		lon: -82.7690,
		lat: 27.7692,
		city: 'Treasure Island',
		country: 'USA'
	},
	{
		lon: -120.6615,
		lat: 47.5962,
		city: 'Leavenworth',
		country: 'USA'
	},
	{
		lon: 11.0457,
		lat: 35.5024,
		city: 'Mahdia',
		country: 'Tunisia'
	},
	{
		lon: 9.6253,
		lat: 40.9961,
		city: 'Golfo Aranci',
		country: 'Italy'
	},
	{
		lon: 11.0032,
		lat: 46.5479,
		city: 'Santa Valburga',
		country: 'Italy'
	},
	{
		lon: 11.3426,
		lat: 44.4949,
		city: 'Bologna',
		country: 'Italy'
	},
	{
		lon: 24.8093,
		lat: 35.2401,
		city: 'Crete',
		country: 'Grece'
	},
	{
		lon: 19.9450,
		lat: 50.0647,
		city: 'Krakow',
		country: 'Poland'
	},
]