import DungeonAndCats from "../assets/images/dungeonAndCats.png";
import Reimari from "../assets/images/reimari.png";
import Bookrater from "../assets/images/bookrater.png";

export type ProjectsData = {
  id: number;
  name: string;
  content: string;
  img: string;
  links: string;
  tech: string[];
};

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    name: "Dungeon and Cats",
    content:
      "A topdown RPG roguelike made in C++ with SDL2. The game features a light weight entity component system.",
    img: DungeonAndCats,
    links: "https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats",
    tech: ["SDL2", "SDL Image", "SDL Mixer", "SDL TTF"],
  },
  {
    id: 2,
    name: "Bookrater",
    content:
      "A MEAN stack project for rating books. Browse through books, rate them and see how others rate the books you enjoy.",
    img: Bookrater,
    links:
      "https://github.com/Cairhiin/Full-stack-MEAN-course/tree/main/fullstack-MEAN-project",
    tech: ["ExpressJS", "Mongoose", "Angular", "TypeScript", "Sass"],
  },
  {
    id: 3,
    name: "Reimari",
    content:
      "A wordpress website for a local newspaper that is distributed weekly.",
    img: Reimari,
    links: "https://reimari.fi",
    tech: ["PHP", "Wordpress", "JavaScript"],
  },
];
