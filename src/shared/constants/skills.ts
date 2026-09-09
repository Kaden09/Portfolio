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
}

export const frontendSkills: Skill[] = [
	{
		icon: HTML,
	},
	{
		icon: CSS,
	},
	{
		icon: JavaScript,
	},
	{
		icon: TypeScript,
	},
	{
		icon: Sass,
	},
	{
		icon: Redux,
	},
	{
		icon: React,
	},
	{
		icon: NextJS,
	},
	{
		icon: Tailwind,
	},
];

export const backendSkills: Skill[] = [
	{
		icon: Java,
	},
	{
		icon: Spring,
	},
	{
		icon: Hibernate,
	},
	{
		icon: Kafka,
	},
	{
		icon: Redis,
	},
	{
		icon: Postgres,
	},
];

export const toolsAndDevops: Skill[] = [
	{
		icon: Docker,
	},
	{
		icon: Kubernetes,
	},
	{
		icon: Maven,
	},
	{
		icon: Yarn,
	},
	{
		icon: Pnpm,
	},
	{
		icon: Vite,
	},
	{
		icon: GitHub,
	},
	{
		icon: Bun,
	},
	{
		icon: Linux,
	},
	{
		icon: Postman,
	},
	{
		icon: Prometheus,
	},
	{
		icon: Grafana,
	},
	{
		icon: Figma,
	},
	{
		icon: Photoshop,
	},
	{
		icon: VSCode,
	},
	{
		icon: Idea,
	},
];
