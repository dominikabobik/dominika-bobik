import styles from '../styles/skills.module.css'
import {NavBar} from "../components/nav-bar";
import {NextPage} from "next";

const Skills: NextPage = () => {
    return (
        <div>
            <title>Dominika Bobik</title>
            <NavBar/>
            <body className={styles.contents}>
            <div >
                <div>
                    <h3>Programming Languages</h3>
                    <p>C/C++, C#, JAva, JavaScript, TypeScript, Bash/UNIX, MIPS, Verilog HDL</p>
                </div>
                <div>
                    <h3>Software</h3>
                    <p>Git, AWS, Virtual Box, MATLAB</p>
                </div>
                <div>
                    <h3>Management</h3>
                    <p>SCRUM/Agile, Microsoft Office,Google GSuite</p>
                </div>
                <div>
                    <h3>Foreign Languages</h3>
                    <p>English, Polish, German</p>
                </div>
            </div>
            </body>
        </div>

    )
}

export default Skills;