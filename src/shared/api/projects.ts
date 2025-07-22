import type { ProjectCardProps } from "../types/project.type";

export const projects: ProjectCardProps[] = [
  {
    title: "Film Flow",
    team: true,
    stack: ["React", "Redux", "JS", "Python", "Firebase", "Swiper", "Prettier"],
    bgImg: "blue",
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
    bgImg: "red",
    link: "https://github.com/Kaden09/SushiMania.git",
  },
  {
    title: "Chars Counter",
    team: false,
    stack: ["React", "TypeScript", "Sass", "ESLint", "Classix", "Vite"],
    bgImg: "orange",
    link: "https://github.com/Kaden09/CharsCounter.git",
  },
];
