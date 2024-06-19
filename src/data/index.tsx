import DungeonAndCats from "../assets/dungeonAndCats.png";
import Reimari from "../assets/reimari.png";
import Bookrater from "../assets/bookrater.png";

type ProjectsData = {
  id: number;
  name: string;
  content: string;
  img: string;
  links: {
    url: string;
  }[];
  tech: string[];
};

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    name: "Dungeon and Cats",
    content:
      "A topdown RPG roguelike made in C++ with SDL2. The game features a light weight entity component system.",
    img: DungeonAndCats,
    links: [
      {
        url: "https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats",
      },
    ],
    tech: ["SDL2", "SDL Image", "SDL Mixer", "SDL TTF"],
  },

  {
    id: 2,
    name: "Bookrater",
    content:
      "A MEAN stack project for rating books. Browse through books, rate them and see how others rate the books you enjoy.",
    img: Bookrater,
    links: [
      {
        url: "https://github.com/Cairhiin/Full-stack-MEAN-course/tree/main/fullstack-MEAN-project",
      },
      {
        url: "https://bookrater.onrender.com/",
      },
      {
        url: "https://www.figma.com/file/Gkwm5lgahuRNLaLP99gC9d/Bookrater?node-id=51822%3A4901&t=fGpC3XpZb1yst3j0-1",
      },
    ],
    tech: ["ExpressJS", "Mongoose", "Angular", "TypeScript", "Sass"],
  },
  {
    id: 3,
    name: "Reimari",
    content:
      "A wordpress website for a local newspaper that is distributed weekly.",
    img: Reimari,
    links: [
      {
        url: "https://reimari.fi",
      },
    ],
    tech: ["PHP", "Wordpress", "JavaScript"],
  },
];
