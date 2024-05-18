import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Varun';

export const lastName = 'Chowdary';

export const description =
	'I am a rising senior at the University of Texas at Austin majoring in Computer Engineering and Finance with a focus on data science and quantitative finance. I am a problem solver and risk-taker who has an interest for quantitative trading of different asset classes.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/VarunCho19' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/varun-chowdary-7709441a6/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.Email,
		link: 'vrcreddy02@gmail.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'svelte', 'ts', 'py', 'c#');
