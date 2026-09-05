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
    title: "KillCode",
    team: false,
    stack: [
      "React",
      "TS",
      "Lucide",
      "Tailwind",
      "Axios",
      "Prettier",
      "ESLint",
    ],
    bgImg: "red",
    link: "https://github.com/Kaden09/KillCode.git",
  },
  {
    title: "Share With Me",
    team: false,
    stack: ["Java", "Spring Boot", "PostgreSQL", "Data JPA", "Lombok", "Docker"],
    bgImg: "orange",
    link: "https://github.com/Kaden09/CharsCounter.git",
  },
];
