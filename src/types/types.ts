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

interface Project {
	title: {
		content: string;
		styles: string;
	};
	about: string;
	previews: ProjectPreview[];
	techStack: Tech[];
	links: ProjectLink[];
}

export type { Tech, ProjectPreview, Project, ProjectLink };
