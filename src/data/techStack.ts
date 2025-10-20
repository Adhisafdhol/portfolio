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
import tailwindCSSIcon from "../assets/images/tailwindcss-icon.svg";

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
	tailwindCSS: Tech;
	gsap: Tech;
	jest: Tech;
	git: Tech;
	figma: Tech;
	inkscape: Tech;
}

const techs: Techs = {
	html: {
		text: "HTML",
		icon: {
			dark: htmlIcon,
			light: htmlIcon,
		},
	},
	css: { text: "CSS", icon: { dark: cssIcon, light: cssIcon } },
	javascript: {
		text: "Javascript",
		icon: { dark: javascriptIcon, light: javascriptIcon },
	},
	typescript: {
		text: "Typescript",
		icon: { dark: typescriptIcon, light: typescriptIcon },
	},
	bash: { text: "Bash", icon: { dark: bashIcon, light: bashIcon } },
	socketIO: {
		text: "Socket.IO",
		icon: { dark: socketioIcon, light: socketioIcon },
	},
	nodeJS: { text: "NodeJS", icon: { dark: nodejsIcon, light: nodejsIcon } },
	express: { text: "Express", icon: { dark: expressIcon, light: expressIcon } },
	postgreSQL: {
		text: "Postgresql",
		icon: { dark: postgresqlIcon, light: postgresqlIcon },
	},
	prisma: { text: "Prisma", icon: { dark: prismaIcon, light: prismaIcon } },
	react: { text: "react", icon: { dark: reactIcon, light: reactIcon } },
	nextJS: { text: "NextJs", icon: { dark: nextjsIcon, light: nextjsIcon } },
	tanstackQuery: {
		text: "Tanstack Query",
		icon: { dark: tanstackQueryIcon, light: tanstackQueryIcon },
	},
	tailwindCSS: {
		text: "TailwindCSS",
		icon: { dark: tailwindCSSIcon, light: tailwindCSSIcon },
	},
	gsap: { text: "GSAP", icon: { dark: gsapIcon, light: gsapIcon } },
	jest: { text: "Jest", icon: { dark: jestIcon, light: jestIcon } },
	git: { text: "git", icon: { dark: gitIcon, light: gitIcon } },
	figma: { text: "Figma", icon: { dark: figmaIcon, light: figmaIcon } },
	inkscape: {
		text: "Inkscape",
		icon: { dark: inkscapeIcon, light: inkscapeIcon },
	},
};

const techStack: Tech[] = [];

for (const key in techs) {
	techStack.push(techs[key as keyof Techs]);
}

export default techStack;
export { techs };
