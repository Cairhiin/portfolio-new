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

export type ResumeData = {
  id: number;
  title: string;
  content: string;
  location: string;
  date: string;
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

export const resumeData = [
  {
    id: 1,
    title: "Freelance Full Stack Developer",
    location: "Remote",
    company: "WorthitIT",
    description:
      "Developing a calendar feature for a web application for divorce resolution as well as frontend and backend support in general. The stack used in the application is Laravel, Inertia and Vue with Tailwind.",
    date: "August 2023 - April 2024",
  },
  {
    id: 2,
    title: "Web Developer",
    location: "Hamina, Finland",
    company: "Hamimedia Oy",
    description:
      "Designing, developing and maintaining the website for Reimari, a local newspaper in Hamina. Relevant skills: PHP, WordPress, JavaScript, CSS, HTML.",
    date: "September 2012 - March 2023",
  },
  {
    id: 3,
    title: "Contributor",
    location: "Kouvola, Finland",
    company: "Insider Student Magazine",
    description:
      "Interviewing students and lecturers and writing person profiles. The job also helped me develop my photography and writing skills.",
    date: "January 2016 - May 2016",
  },
  {
    id: 4,
    title: "Web Developer",
    location: "Kotka and Hamina, Finland",
    company: "H-teksti Ky",
    description:
      "Designing, developing and maintaining the website for the local newspapers Poiju in Kotka and, from 2007 onward, Reimari in Hamina. Relevant skills: PHP, WordPress, JavaScript, CSS, HTML.",
    date: "October 2006 - September 2012",
  },
  {
    id: 5,
    title: "Web Developer",
    location: "Kotka, Finland",
    company: "Poiju Julkaisut Oy",
    description:
      "Designing, developing and maintaining the website for the local newspaper Poiju in Kotka. Relevant skills: PHP, WordPress, JavaScript, CSS, HTML.",
    date: "October 2001 - September 2006",
  },
];
