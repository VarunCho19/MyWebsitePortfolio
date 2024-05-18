import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computer Engineering',
		description: 'Focus in Data Science and Information Processing',
		location: 'Austin, TX',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Texas at Austin',
		period: { from: new Date(2021, 20, 8), to: new Date(2025, 5, 5) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'B.B.A in Finance',
		description: '',
		location: 'Austin, TX',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Texas at Austin',
		period: { from: new Date(2021, 20, 8), to: new Date(2025, 4, 5) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	}
];

export const title = 'Education';
