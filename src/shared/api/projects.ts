import type { ProjectCardProps } from "../types/project.type";

export const projects: ProjectCardProps[] = [
  {
    title: "Film Flow",
    team: true,
    stack: ["React", "Redux", "JS", "Python", "Firebase", "Swiper", "Prettier"],
    bgImg: "src/shared/assets/bg/blueProject.svg",
    link: "https://github.com/Kaden09/Kino.git",
  },
  {
    title: "Sushi Mania",
    team: false,
    stack: [
      "Next.js",
      "TS",
      "Zustand",
      "Sass",
      "Prettier",
      "Stylelint",
      "ESLint",
      "Swiper",
      "SVGR",
    ],
    bgImg: "src/shared/assets/bg/redProject.svg",
    link: "https://github.com/Kaden09/SushiMania.git",
  },
  {
    title: "Chars Counter",
    team: false,
    stack: ["React", "TypeScript", "Sass", "ESLint", "Classix", "Vite"],
    bgImg: "src/shared/assets/bg/orangeProject.svg",
    link: "https://github.com/Kaden09/CharsCounter.git",
  },
];
