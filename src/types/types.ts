interface Tech {
	icon: {
		default: string;
		light?: string;
		dark?: string;
	};
	text: string;
}

interface ProjectPreview {
	url: string;
	description: string;
	alt: string;
	type: string;
}

interface Project {
	title: {
		content: string;
		styles: string;
	};
	about: string;
	previews: ProjectPreview[];
}

export type { Tech, ProjectPreview, Project };
