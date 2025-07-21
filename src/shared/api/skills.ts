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
    icon: HTML,
  },
  {
    id: "2",
    icon: CSS,
  },
  {
    id: "3",
    icon: JavaScript,
  },
  {
    id: "4",
    icon: TypeScript,
  },
  {
    id: "5",
    icon: React,
  },
  {
    id: "6",
    icon: Sass,
  },
  {
    id: "7",
    icon: NextJS,
  },
  {
    id: "8",
    icon: Tailwind,
  },
  {
    id: "9",
    icon: Redux,
  },
  {
    id: "10",
    icon: Yarn,
  },
  {
    id: "11",
    icon: Npm,
  },
  {
    id: "12",
    icon: Pnpm,
  },
  {
    id: "13",
    icon: Vite,
  },
  {
    id: "14",
    icon: Figma,
  },
  {
    id: "15",
    icon: Photoshop,
  },
  {
    id: "16",
    icon: GitHub,
  },
  {
    id: "17",
    icon: VSCode,
  },
  {
    id: "18",
    icon: Postman,
  },
];
