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

interface Techs {
	html: Tech;
	css: Tech;
	javascript: Tech;
	typescript: Tech;
	bash: Tech;
	socketIO: Tech;
	nodeJS: Tech;
	express: Tech;
	postgreSQL: Tech;
	prisma: Tech;
	react: Tech;
	nextJS: Tech;
	tanstackQuery: Tech;
	gsap: Tech;
	jest: Tech;
	git: Tech;
	figma: Tech;
	Inkscape: Tech;
}

const techs: Techs = {
	html: {
		text: "HTML",
		icon: {
			default: htmlIcon,
		},
	},
	css: { text: "CSS", icon: { default: cssIcon } },
	javascript: { text: "Javascript", icon: { default: javascriptIcon } },
	typescript: { text: "Typescript", icon: { default: typescriptIcon } },
	bash: { text: "Bash", icon: { default: bashIcon } },
	socketIO: { text: "Socket.IO", icon: { default: socketioIcon } },
	nodeJS: { text: "NodeJS", icon: { default: nodejsIcon } },
	express: { text: "Express", icon: { default: expressIcon } },
	postgreSQL: { text: "Postgresql", icon: { default: postgresqlIcon } },
	prisma: { text: "Prisma", icon: { default: prismaIcon } },
	react: { text: "react", icon: { default: reactIcon } },
	nextJS: { text: "NextJs", icon: { default: nextjsIcon } },
	tanstackQuery: {
		text: "Tanstack Query",
		icon: { default: tanstackQueryIcon },
	},
	gsap: { text: "GSAP", icon: { default: gsapIcon } },
	jest: { text: "Jest", icon: { default: jestIcon } },
	git: { text: "git", icon: { default: gitIcon } },
	figma: { text: "Figma", icon: { default: figmaIcon } },
	Inkscape: { text: "Inkscape", icon: { default: inkscapeIcon } },
};

const techStack: Tech[] = [];

for (const key in techs) {
	techStack.push(techs[key as keyof Techs]);
}

export default techStack;
