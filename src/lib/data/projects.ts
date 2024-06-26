import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Medical Image Classification',
		color: '#5e95e3',
		description:
			'Brain Scan classification based on a project done by a research paper.',
		shortDescription:
			'Data Science Project where we are trying to classify brain scans with different diseases using different types of nueral networks.',
		links: [{ to: 'https://github.com/VarunCho19/MedicalImageClassifcation', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Medical Image Classification',
		period: {
			from: new Date()
		},
		skills: getSkills('py'),
		type: 'Data Science'
	},
	{
		slug: 'Real-Fake-AI-Image',
		color: '#5e95e3',
		description:
			'As AI-generated imagery rapidly evolves, ethical concerns arise prominently in areas like deepfake technology and the arts. In artistic domains, the replication of unique styles through AI can lead to plagiarism and dilute the individuality that defines human creativity. To address these challenges, we applied our machine learning expertise using a dataset from Kaggle, which comprised approximately 1,700 authentic artworks and 1,700 AI-generated pieces modeled after Van Gogh’s style [1]. This project allowed us to explore various strategies, which we will detail throughout this paper.',
		shortDescription:
			'Data Science Project where we are trying to classify stabe diffused generated images as real or AI generated',
		links: [{ to: 'https://github.com/VarunCho19/dsl_final_project_ai_vs_real_art', label: 'GitHub' }, {to: 'https://medium.com/@abbykremer/classification-of-ai-generated-artwork-93926ba46991', label: 'Medium'}],
		logo: Assets.Unknown,
		name: 'Real versus Fake AI Generated Image Classifcation',
		period: {
			from: new Date()
		},
		skills: getSkills('py','pandas'),
		type: 'Data Science'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit. I want to include a machine learning component to help answer question about me.',
		shortDescription:
			'My Own Personal Website',
		links: [{ to: 'https://github.com/VarunCho19/MyWebsitePortfolio', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Varun Website Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind','py'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
