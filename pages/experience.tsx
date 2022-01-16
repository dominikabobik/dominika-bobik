import styles from '../styles/experience.module.css'
import {NavBar} from "../components/nav-bar";
import {NextPage} from "next";


const Experience: NextPage = () => {
    return (
        <div>
            <NavBar/>
            <body className={styles.text}>
            <h1>
                Professional Experience
            </h1>
                <p>
                    Software Engineering Intern, Open Systems International
                </p>
                <p>
                    Developed new features for the power outage management system “Compass” for various customers ranging from private firms to national electric corporations. Implemented dynamic elements in Compass’s map software using the MapBox API while maintaining cross-platform compatibility and a positive user experience. Technologies used:Xamarin, .NET, MapBox, HTML/CSS/JavaScript, and more.
                </p>
            <h1>
                Research Experience
            </h1>
            <p>
                Undergraduate Research Assistant - SnP Lab
            </p>
            <p>
                “Towards Secure Decentralized Cloud Storage by Leveraging Blockchain Technology” Researched error-correcting codes that are suitable for flash memory in a decentralized cloud architecture.Implemented polar encoding for data storage in flash memory.

            </p>
            <p>
                “Ensuring Security of the Internet of Things Network” Led a research study in cloud system security focusing on the software stack provided by Amazon Web Services (AWS). The study was focused on the security aspects of IoT,and routing protocols provided by AWS and how other technologies can be adapted to IoT environments.

            </p>
            <p>
                Undergraduate Research Assistant - Abadi Lab
            </p>
            <p>
                Conducted the study on developing fully mature cardiac cells from neonatal rat cardiomyocytes. Maintained cell culture seeded on a conductive carbon nanotube scaffold (CNT), imagined cell culture using CIF and SEM Microscopes, participated in CardiomyocyteIsolation Protocol, and much more.
            </p>
            <p>
                “Mechanical Stimulation of Cardiomyocytes Seeded on the Carbon Nanotube ForestScaffold for Producing Mature and Functional Cells” Using Siemens NX designed a custom device that provided dual electrical and mechanical stimuli to the cells.
            </p>
            </body>
        </div>

    )
}

export default Experience;