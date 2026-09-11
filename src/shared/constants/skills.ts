import CSS from '@/shared/assets/skills/CSS.svg?react';
import Figma from '@/shared/assets/skills/Figma.svg?react';
import GitHub from '@/shared/assets/skills/Github.svg?react';
import HTML from '@/shared/assets/skills/HTML.svg?react';
import JavaScript from '@/shared/assets/skills/JavaScript.svg?react';
import NextJS from '@/shared/assets/skills/NextJS.svg?react';
import Photoshop from '@/shared/assets/skills/Photoshop.svg?react';
import Pnpm from '@/shared/assets/skills/Pnpm.svg?react';
import Postman from '@/shared/assets/skills/Postman.svg?react';
import React from '@/shared/assets/skills/React.svg?react';
import Redux from '@/shared/assets/skills/Redux.svg?react';
import Sass from '@/shared/assets/skills/Sass.svg?react';
import Tailwind from '@/shared/assets/skills/TailwindCSS.svg?react';
import TypeScript from '@/shared/assets/skills/TypeScript.svg?react';
import Vite from '@/shared/assets/skills/Vite.svg?react';
import Yarn from '@/shared/assets/skills/Yarn.svg?react';
import Bun from '@/shared/assets/skills/Bun.svg?react';
import Java from '@/shared/assets/skills/Java.svg?react';
import Docker from '@/shared/assets/skills/Docker.svg?react';
import Spring from '@/shared/assets/skills/Spring.svg?react';
import Hibernate from '@/shared/assets/skills/Hibernate.svg?react';
import Maven from '@/shared/assets/skills/Maven.svg?react';
import Linux from '@/shared/assets/skills/Linux.svg?react';
import Kafka from '@/shared/assets/skills/Kafka.svg?react';
import Redis from '@/shared/assets/skills/Redis.svg?react';
import Postgres from '@/shared/assets/skills/PostgreSQL.svg?react';
import Kubernetes from '@/shared/assets/skills/Kubernetes.svg?react';
import VSCode from '@/shared/assets/skills/VSCode.svg?react';
import Idea from '@/shared/assets/skills/Idea.svg?react';
import Prometheus from '@/shared/assets/skills/Prometheus.svg?react';
import Grafana from '@/shared/assets/skills/Grafana.svg?react';

export interface Skill {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	label: string;
}

export const frontendSkills: Skill[] = [
	{
		icon: HTML,
		label: 'HTML',
	},
	{
		icon: CSS,
		label: 'CSS',
	},
	{
		icon: JavaScript,
		label: 'JavaScript',
	},
	{
		icon: TypeScript,
		label: 'TypeScript',
	},
	{
		icon: Sass,
		label: 'Sass',
	},
	{
		icon: Redux,
		label: 'Redux',
	},
	{
		icon: React,
		label: 'React',
	},
	{
		icon: NextJS,
		label: 'Next.js',
	},
	{
		icon: Tailwind,
		label: 'Tailwind',
	},
];

export const backendSkills: Skill[] = [
	{
		icon: Java,
		label: 'Java',
	},
	{
		icon: Spring,
		label: 'Spring',
	},
	{
		icon: Hibernate,
		label: 'Hibernate',
	},
	{
		icon: Kafka,
		label: 'Kafka',
	},
	{
		icon: Redis,
		label: 'Redis',
	},
	{
		icon: Postgres,
		label: 'PostgreSQL',
	},
];

export const toolsAndDevops: Skill[] = [
	{
		icon: Docker,
		label: 'Docker',
	},
	{
		icon: Kubernetes,
		label: 'Kubernetes',
	},
	{
		icon: Maven,
		label: 'Maven',
	},
	{
		icon: Yarn,
		label: 'Yarn',
	},
	{
		icon: Pnpm,
		label: 'Pnpm',
	},
	{
		icon: Vite,
		label: 'Vite',
	},
	{
		icon: GitHub,
		label: 'GitHub',
	},
	{
		icon: Bun,
		label: 'Bun',
	},
	{
		icon: Linux,
		label: 'Linux',
	},
	{
		icon: Postman,
		label: 'Postman',
	},
	{
		icon: Prometheus,
		label: 'Prometheus',
	},
	{
		icon: Grafana,
		label: 'Grafana',
	},
	{
		icon: Figma,
		label: 'Figma',
	},
	{
		icon: Photoshop,
		label: 'Photoshop',
	},
	{
		icon: VSCode,
		label: 'VSCode',
	},
	{
		icon: Idea,
		label: 'IntellijIDEA',
	},
];
