import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';

export default {
	name: 'Jesús Antonio García Zurita',
	title: 'BackEnd Developer',

	email: '',
	address: 'Guanajuato',
	phone: '',
	adress: 'Guanajuato',
	downloadCv: '',

	socials: {
		Linkedin: {
			link: 'https://www.linkedin.com/in/jes%C3%BAs-antonio-garc%C3%ADa-zurita-85b3941a9/',
			icon: <LinkedInIcon />,
			text: 'Linkedin',
		},

		Github: {
			link: 'https://github.com/jesusGZ',
			icon: <GitHubIcon />,
			text: 'Github',
		},
	},

	about: 'fghjikojuytfdghvjbknjuythgbjnkmikoijuhyjhjujbhuijoubjhujhj',

	experiences: [
		{
			title: 'Morpheus DSS - Desarrollador de backEnd',
			date: '21/12/2020 – Actualidad',
			description: 'Desarrollo de servicios web y API REST.',
		},
		{
			title: 'Autonomo - Desarrollador web',
			date: '2/2020 – 7/2020',
			description: 'Desarrollo de aplicaciones web a particulares.',
		},
		{
			title: 'Tejiendo Web SAPI de CV - Desarrollador Jr',
			date: '6/2019 – 12/2019',
			description: 'Desarollo de web app de test psicometricos y de conocimientos para el proceso de seleccion de personal.',
		},
	],

	education: [
		{
			title: 'Instituto Tecnologico Superior del Sur de Guanajuato.',
			date: '2014 – 2019',
			description: 'Ingenieria en informatica',
		},
		{
			title: 'Colegio Nacional de Educacion Profesional Tecnica',
			date: '2011 – 2014',
			description: 'Tecnico en informatica',
		},
	],

	skills: [
		{
			title: 'Front-End',
			description: ['ReactJS', 'HTML5', 'CSS3', 'SCSS'],
		},
		{
			title: 'Back-End',
			description: ['Node Js', 'Laravel', 'PHP', 'MySQL', 'MongoDB'],
		},
		{
			title: 'Back-End',
			description: ['Node Js', 'Laravel', 'PHP', 'MySQL', 'MongoDB'],
		},
	],

	certifications: [
		{
			side: 'left',
			title: ' Curso Básico de MongoDB',
			date: '07 Enero 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1533-mongodb/diploma/detalle/',
			organization: 'platzi.com',
		},
		{
			side: 'right',
			title: 'Curso de Asincronismo con JavaScript',
			date: '14 Marzo 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1789-asincronismo-js/diploma/detalle/',
			organization: 'platzi.com',
		},
		{
			side: 'left',
			title: 'Curso de ECMAScript 6+',
			date: '09 Febrero 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1815-ecmascript-6/diploma/detalle/',
			organization: 'platzi.com',
		},
		{
			side: 'right',
			title: 'Curso de Fundamentos de Node.js',
			date: '04 Enero 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1759-fundamentos-node/diploma/detalle/',
			organization: 'platzi.com',
		},
		{
			side: 'left',
			title: 'Curso de Gestión Efectiva del Tiempo',
			date: '14 Marzo 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1749-gestion-tiempo/diploma/detalle/',
			organization: 'platzi.com',
		},
		{
			side: 'right',
			title: 'Curso de Node.js: Autenticación, Microservicios y Redis',
			date: '03 Febrero 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1767-nodejs-microservicios/diploma/detalle/',
			organization: 'platzi.com',
		},
		{
			side: 'left',
			title: 'Curso de Node.js: Base de Datos con MongoDB y WebSockets',
			date: '03 Enero 2021',
			link: 'https://platzi.com/p/jesusGZ/curso/1689-nodejs-mongo-websockets/diploma/detalle/',
			organization: 'platzi.com',
		},
	],

	projects: [
		{
			tag: 'Github',
			images: ['https://i.ibb.co/F3mhZWM/photo-2020-12-29-15-48-10.jpg', 'https://i.ibb.co/Ptc9gdx/photo-2020-12-28-21-18-32.jpg', 'https://i.ibb.co/Nr8rQ62/photo-2020-12-27-14-27-10.jpg'],
			title: 'Self balancing robot',
			caption: 'Arduino based self balancing robot',
			description: 'Project of 4th Year University',
			links: [
				{ link: 'https://youtu.be/0bnQlZczCOw', icon: <YouTubeIcon /> },
				{
					link: 'https://github.com/mahowik/BalancingWii',
					icon: <GitHubIcon />,
				},
			],
		},
		{
			tag: 'Github',
			images: ['https://i.ibb.co/xJZhszG/Captura-de-Pantalla-2021-11-05-a-la-s-15-37-50.png'],
			title: 'EXÁMENES DE SELECCIÓN TEJIENDO WEB',
			caption: 'Aplicacion web de test de seleccion de personal(psicometricos y conocimientos).',
			description: 'Aplicacion web de test de seleccion de personal(psicometricos y conocimientos), cuenta con entorno para administradores y candidatos.',
			links: [
				{
					link: 'https://rh.tejiendoweb.mx/',
					icon: <LinkIcon />,
				},
			],
		},
		{
			tag: 'React',
			images: ['https://i.ibb.co/FWr7QHk/Annotation-2021-08-22-231400.png'],
			title: 'Resume Web Page',
			caption: 'Single Page Application',
			description: 'Portfolio Single Page Application',
			links: [
				{
					link: 'https://github.com/heisenberg550/react-resume-clone',
					icon: <LinkIcon />,
				},
			],
		},
		{
			tag: 'React',
			images: ['https://i.ibb.co/zfM9Svx/Annotation-2021-08-22-234126.png', 'https://i.ibb.co/2hb0sPV/Annotation-2021-08-22-234236.png'],
			title: 'Photo Gallery',
			caption: 'Photo Gallery by React',
			description: 'Photo Gallery to firebox by React',
			links: [
				{
					link: 'https://github.com/heisenberg550/PhotoGallery',
					icon: <GitHubIcon />,
				},
			],
		},
		{
			tag: 'JavaScript',
			images: ['https://i.ibb.co/Gkw4JX5/Annotation-2021-08-22-232757.png'],
			title: 'CountDown Timer',
			caption: 'CountDown Timer',
			description: 'CountDown Timer',
			links: [
				{
					link: 'https://github.com/heisenberg550/trainingProjects/tree/main/Countdown-Timer',
					icon: <GitHubIcon />,
				},
			],
		},
	],
};
