import type { Tech } from "../types/types";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import javascriptIcon from "../assets/images/javascript-icon.svg";
import typescriptIcon from "../assets/images/typescript-icon.svg";
import socketioIcon from "../assets/images/socketio-icon.svg";
import nodejsIcon from "../assets/images/nodejs-icon.svg";
import expressIcon from "../assets/images/express-icon.svg";
import postgresqlIcon from "../assets/images/postgresql-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import prismaIcon from "../assets/images/prisma-icon.svg";
import nextjsIcon from "../assets/images/nodejs-icon.svg";
import jestIcon from "../assets/images/jest-icon.svg";
import gitIcon from "../assets/images/git-icon.svg";
import figmaIcon from "../assets/images/figma-icon.svg";
import inkscapeIcon from "../assets/images/inkscape-icon.svg";
import bashIcon from "../assets/images/bash-icon.svg";
import tanstackQueryIcon from "../assets/images/tanstack-query-icon.png";
import gsapIcon from "../assets/images/gsap-icon.svg";

const techStack: Tech[] = [
	{ text: "HTML", icon: htmlIcon },
	{ text: "CSS", icon: cssIcon },
	{ text: "Javascript", icon: javascriptIcon },
	{ text: "Typescript", icon: typescriptIcon },
	{ text: "Bash", icon: bashIcon },
	{ text: "Socket.IO", icon: socketioIcon },
	{ text: "NodeJS", icon: nodejsIcon },
	{ text: "Express", icon: expressIcon },
	{ text: "Postgresql", icon: postgresqlIcon },
	{ text: "Prisma", icon: prismaIcon },
	{ text: "react", icon: reactIcon },
	{ text: "NextJs", icon: nextjsIcon },
	{ text: "Tanstack Query", icon: tanstackQueryIcon },
	{ text: "GSAP", icon: gsapIcon },
	{ text: "Jest", icon: jestIcon },
	{ text: "git", icon: gitIcon },
	{ text: "Figma", icon: figmaIcon },
	{ text: "Inkscape", icon: inkscapeIcon },
];

export default techStack;
