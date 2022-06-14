import {FcCrystalOscillator, FcEngineering, FcAndroidOs, FcCircuit, FcChargeBattery, FcLibrary, FcMindMap} from "react-icons/fc";
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
                technologies: ['JavaScript','Supabase'],
                github: 'https://github.com/DomiNika-12/dbank',
                img: '',
                icon: <FcLibrary/>,
                lang: "js"
        },
        {
                title: 'Resistor Color Decoder',
                description: 'Made a web app that finds color code based on the resistance of the basic circuit component.',
                technologies: ['TypeScript','React Native', 'Expo'],
                github: 'https://github.com/DomiNika-12/circuits',
                img: '/crk.png',
                icon: <FcCrystalOscillator/>,
                lang: "js"
        },
        {
                title: 'Tic Tac Toe',
                description: 'Created a console-run tic tac toe game for 2 players using C++.',
                technologies: ['C++'],
                github: 'https://github.com/DomiNika-12/TicTacToe',
                img: '',
                icon: <FcEngineering/>,
                lang: "c"
        },
        {
                title: 'Travel App',
                description: 'Created a Xamarin Forms app that integrated an SQLite database, which allows users to enter the name of the city visited, country, and continent.',
                technologies: ['C#', 'Xamarin Forms', 'SQLite'],
                github: 'https://github.com/DomiNika-12/Travel',
                img: '',
                icon:<FcCircuit/>
        },
        {
                title: 'Snowflakes',
                description: 'Made a JavaFX application that produces window filled with randomly generated snowflakes.',
                technologies: ['Java','JavaFX'],
                github: 'https://github.com/DomiNika-12/Snowflakes',
                img: '/snowflake.jpg',
                icon: <FcMindMap/>,
                lang: "java"
        },
        {
                title: 'Calculator App',
                description: 'Wrote an android application in Java that performs 12 distinct mathematical operations. Designed a scalable, vertical\n' +
                    '         layout that is more suitable than the default one.',
                technologies: ['Android Studio', 'Java'],
                github: 'https://github.com/DomiNika-12/Calculator',
                img: '/calculator.jpg',
                icon: <FcAndroidOs/>
        },
        {
                title: 'Robotics Systems Enterprise',
                description: 'Worked on development and implementation of autonomous driving and leader following behavior in the 6 robot (Clearpath Jackals) convoy utilizing ROS.',
                technologies: ['ROS', 'Python'],
                github: 'https://rse.mtu.edu/',
                img: '/rse.png',
                icon: <FcChargeBattery/>
        },
        {
                title: 'Blue Marble Security Enterprise',
                description: 'Worked on a team of software engineering students focusing on implementing  autonomous pathfinding into a testing robot using the Robot Operating System (ROS), utilizing C++ and Python. Provided community outreach and educated the team on circuit design and soldering techniques.',
                technologies: ['ROS', 'C++', 'Python'],
                github:'https://bluemarblesecurity.eit.mtu.edu/index.php',
                img: '/bluemarble.jpeg',
                icon: <FcCrystalOscillator/>
        },
];
