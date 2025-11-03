interface Tech {
	icon: {
		light: string;
		dark: string;
	};
	text: string;
}

interface ProjectPreview {
	url: string;
	description: string;
	alt: string;
	type: string;
}

interface ProjectLink {
	text: string;
	url: string;
}

interface ProjectContribution {
	title: string;
	contributions: string[];
}

interface Project {
	title: {
		content: string;
		styles: string;
	};
	about: string;
	previews: ProjectPreview[];
	techStack: Tech[];
	links: ProjectLink[];
	contribution: ProjectContribution[];
}

interface Social {
	text: string;
	icon: string;
	url: string;
}

interface AboutMe {
	profile: string[];
	github: Social;
}

export type {
	Tech,
	ProjectPreview,
	Project,
	ProjectLink,
	ProjectContribution,
	Social,
	AboutMe,
};
