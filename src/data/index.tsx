import DungeonAndCats from "../assets/images/dungeonAndCats.png";
import Reimari from "../assets/images/reimari.png";
import Bookrater from "../assets/images/bookrater.png";
import Documenter from "../assets/images/documenter.png";
import DocumenterStatic from "../assets/images/Documenter_Static.png";

export type ProjectsData = {
  id: number;
  name: string;
  content: string;
  img: string;
  link: { href: string; icon: string };
  tech: string[];
};

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    name: "Documenter",
    content:
      "Full stack work on a mediator application that allows divorce mediators to manage difficult divorce settlements cases in cooperation with clients developed by WorthitIT.",
    img: Documenter,
    link: {
      href: "https://documenter.nl/",
      icon: "Website",
    },

    tech: ["Laravel", "Inertia", "Vue"],
  },
  {
    id: 2,
    name: "Documenter Static Website",
    content:
      "Design and implementation of a static information website for Documenter.",
    img: DocumenterStatic,
    link: {
      href: "https://documenter.nl/",
      icon: "Website",
    },
    tech: ["Wordpress", "Oxygen", "Figma"],
  },
  {
    id: 3,
    name: "Dungeon and Cats",
    content:
      "A topdown RPG roguelike made in C++ with SDL2. The game features a light weight entity component system.",
    img: DungeonAndCats,
    link: {
      href: "https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats",
      icon: "GitLab",
    },

    tech: ["SDL2", "SDL Image", "SDL Mixer", "SDL TTF"],
  },
  {
    id: 4,
    name: "Bookrater",
    content:
      "A MEAN stack project for rating books. Browse through books, rate them and see how others rate the books you enjoy.",
    img: Bookrater,
    link: {
      href: "https://github.com/Cairhiin/Bookrater/",
      icon: "GitHub",
    },

    tech: ["ExpressJS", "Mongoose", "Angular", "TypeScript", "Sass"],
  },
  {
    id: 5,
    name: "Reimari",
    content:
      "A wordpress website for a local newspaper that is distributed weekly.",
    img: Reimari,
    link: {
      href: "https://reimari.fi/",
      icon: "Website",
    },
    tech: ["PHP", "Wordpress", "JavaScript"],
  },
];
