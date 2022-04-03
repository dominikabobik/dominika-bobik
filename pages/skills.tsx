import styles from '../styles/skills.module.css'
import {NavBar} from "../components/nav-bar";
import {NextPage} from "next";
import {Skill} from "../components/skill";

const skills: Record<string, string[]> = {
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

const Skills: NextPage = () => {

    return (
        <div>
            <title>Dominika Bobik</title>
            <NavBar/>
            <div className={styles.wrapper}>
                <body className={styles.contents}>
                    {
                        Object.keys(skills).map((skillGroup, i) => {
                            return <div key={i}>
                            <h3>{skillGroup}</h3>
                            <ul className={styles.lists}>
                                {skills[skillGroup].map((language, j) => {
                                })}
                            </ul>
                        </div>
                        })
                    }
                </body>
            </div>
        </div>

    )
}

export default Skills;