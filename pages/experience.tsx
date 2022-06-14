export interface researchExp {
	position: string,
	projectTitle: string,
	description: string,
	link?: string
}

export const dataExp: researchExp[] = [
	{
			position:'Undergraduate Research Assistant',
			projectTitle: '“Autonomy in robotics systems“',
			description: 'Researched concepts crucial for robotics. Learned basis of ROS navigation stack. Debugged undesired robot behavior using RViz. Wrote the documentation.',
			link: '/FinalReport.pdf'
	},
	{
			position:'Undergraduate Research Assistant',
			projectTitle: '“Towards Secure Decentralized Cloud Storage by Leveraging Blockchain Technology”',
			description: 'Researched error-correcting codes that are suitable for flash memory in a decentralized cloud architecture. Implemented polar encoding for data storage in flash memory.',
			link: "https://snp.cs.mtu.edu/"
	},
	{
			position:'Undergraduate Research Assistant',
			projectTitle: '“Ensuring Security of the Internet of Things Network”',
			description: 'Led a research study in cloud system security focusing on the software stack provided by Amazon Web Services (AWS). The study was focused on the security aspects of IoT,and routing protocols provided by AWS and how other technologies can be adapted to IoT environments.',
			link: "https://snp.cs.mtu.edu/"
	},
	{
			position:'Undergraduate Research Assistant',
			projectTitle: '“Mechanical Stimulation of Cardiomyocytes Seeded on the Carbon Nanotube ForestScaffold for Producing Mature and Functional Cells”',
			description: 'Using Siemens NX designed a custom device that provided dual electrical and mechanical stimuli to the cells.',
			link: '/URIP2020Project.pdf'
	}

];
