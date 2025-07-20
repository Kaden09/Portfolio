import CSS from "@/shared/assets/skills/CSS.svg?react";
import Figma from "@/shared/assets/skills/Figma.svg?react";
import GitHub from "@/shared/assets/skills/Github.svg?react";
import HTML from "@/shared/assets/skills/HTML.svg?react";
import JavaScript from "@/shared/assets/skills/JavaScript.svg?react";
import NextJS from "@/shared/assets/skills/NextJS.svg?react";
import Npm from "@/shared/assets/skills/Npm.svg?react";
import Photoshop from "@/shared/assets/skills/Photoshop.svg?react";
import Pnpm from "@/shared/assets/skills/Pnpm.svg?react";
import Postman from "@/shared/assets/skills/Postman.svg?react";
import React from "@/shared/assets/skills/React.svg?react";
import Redux from "@/shared/assets/skills/Redux.svg?react";
import Sass from "@/shared/assets/skills/Sass.svg?react";
import Tailwind from "@/shared/assets/skills/TailwindCSS.svg?react";
import TypeScript from "@/shared/assets/skills/TypeScript.svg?react";
import Vite from "@/shared/assets/skills/Vite.svg?react";
import VSCode from "@/shared/assets/skills/VSCode.svg?react";
import Yarn from "@/shared/assets/skills/Yarn.svg?react";

interface ISkills {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const skills: ISkills[] = [
  {
    id: "1",
    icon: CSS,
  },
  {
    id: "2",
    icon: Figma,
  },
  {
    id: "3",
    icon: GitHub,
  },
  {
    id: "4",
    icon: HTML,
  },
  {
    id: "5",
    icon: JavaScript,
  },
  {
    id: "6",
    icon: NextJS,
  },
  {
    id: "7",
    icon: Npm,
  },
  {
    id: "8",
    icon: Photoshop,
  },
  {
    id: "9",
    icon: Pnpm,
  },
  {
    id: "10",
    icon: Postman,
  },
  {
    id: "11",
    icon: React,
  },
  {
    id: "12",
    icon: Redux,
  },
  {
    id: "13",
    icon: Sass,
  },
  {
    id: "14",
    icon: Tailwind,
  },
  {
    id: "15",
    icon: TypeScript,
  },
  {
    id: "16",
    icon: Vite,
  },
  {
    id: "17",
    icon: VSCode,
  },
  {
    id: "18",
    icon: Yarn,
  },
];
