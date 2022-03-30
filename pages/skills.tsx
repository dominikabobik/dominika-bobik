import styles from '../styles/skills.module.css'
import {NavBar} from "../components/nav-bar";
import {NextPage} from "next";
import {Skill} from "../components/skill";

const Skills: NextPage = () => {
    const programmingLanguages = [
        'C/C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'MIPS/Nios', 'Verilog HDL'
    ];

    const pr = programmingLanguages.map((language) =>
        // eslint-disable-next-line react/jsx-key
        <Skill name={language}/>
    );

    const skills = [
        'Git', 'ROS', 'AWS', 'Virtual Box', 'MATLAB'
    ];

    const sk = skills.map((skill) =>
        // eslint-disable-next-line react/jsx-key
        <Skill name={skill}/>
    );
    const management =[
        'SCRUM/Agile', 'Microsoft Office','Google GSuite'
    ]
    const mg = management.map((manag) =>
        // eslint-disable-next-line react/jsx-key
        <Skill name={manag}/>
    )

    const languages = [
        'English', 'Polish', 'German'
    ]

    const lg = languages.map((language) =>
        // eslint-disable-next-line react/jsx-key
        <Skill name={language}/>
    )

    return (
        <div>
            <title>Dominika Bobik</title>
            <NavBar/>
            <div className={styles.wrapper}>
                <body className={styles.contents}>
                <div >
                    <div>
                        <h3>Programming Languages</h3>
                        <ul className={styles.lists}>{pr}</ul>
                    </div>
                    <div>
                        <h3>Software</h3>
                        <ul className={styles.lists}>{sk}</ul>
                    </div>
                    <div>
                        <h3>Management</h3>
                        <ul className={styles.lists}>{mg}</ul>
                    </div>
                    <div>
                        <h3>Foreign Languages</h3>
                        <ul className={styles.lists}>{lg}</ul>
                    </div>

                </div>
                </body>
            </div>
        </div>

    )
}

export default Skills;