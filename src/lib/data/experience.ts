import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Quant-Exec',
		company: 'Graham Capital Management',
		description: 'Conducting quantitative research and fostering collaborative efforts to develop alpha on smart execution algorithms by analyzing limit order book dashboards and intraday trading volume data',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Rowayton, CT',
		period: { from: new Date() },
		skills: getSkills('py', 'pandas'),
		name: 'Incoming Quantitative Execution Intern',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Optimizing execution algortithims for FX and Equities using high-frequency data'
	},
	{
		slug: 'TA-Exec',
		company: 'University of Texas at Austin',
		description: '•	Collaborated with professors weekly to generate course curriculum that teach technology management, Python, Microsoft Excel, and SQL •	Analyzed 200+ student records, and identified trends and areas for improvement through implementing data-driven recommendations',
		contract: ContractType.PartTime,
		type: 'Teaching Assistant',
		location: 'Austin, TX',
		period: { from: new Date(2022, 7, 31), to: new Date() },
		skills: getSkills('py', 'pandas'),
		name: 'MIS Teaching Assistant',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Collaborated with professors weekly to generate course curriculum that teach technology management, Python, Microsoft Excel, and SQL. In addition, I held weekly office hours to keep up with students learning. '
	},
	{
		slug: 'Quant-Dev',
		company: 'Graham Capital Management',
		description: '•	Analyzed signal generation research on $20B of assets to develop an equities, commodities, and FX dashboard utilizing Microsoft Blazor\n• Collaborated with quantitative analysts to develop python scripts that denoise options data to generate multi-variable GARCH models\n• Enhanced execution systems runtime by 5% through trading algorithms and pricing models optimized for alpha generation and slippage costs',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Rowayton, CT',
		period: { from: new Date(2023, 4, 31), to: new Date(2023,7,4) },
		skills: getSkills('css', 'html', 'c#'),
		name: 'Quantitative Developer Intern',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Created Dashboard to help analyze our systematic trading systems through utilizing Blazor'
	},
	{
		slug: 'SWE',
		company: 'Texas Capital Bank',
		description: '•	Analyzed regression models to develop conclusions on Mortgage-Backed Securities and generated $50K+ in fee revenue ,Utilized AWS Lambda and Python to develop a REST API that queries PostgreSQL databases and posts the results to an HTTP endpoint for end-users, •	Collaborated with traders to provide input on repo-trading opportunities through stochastic models to identify risk-averse opportunities',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Dallas, TX',
		period: { from: new Date(2022, 4, 31), to: new Date(2022,7,1) },
		skills: getSkills('css', 'html', 'js','py','java'),
		name: 'Software Engineering Intern',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Utilized AWS Lambda and Python to develop a REST API that queries PostgreSQL databases and posts the results to an HTTP endpoint for end-users with a codebase dependent on Java'
	}
];

export const title = 'Experience';
