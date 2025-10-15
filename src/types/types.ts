interface Tech {
	icon: string;
	text: string;
}

interface ProjectImage {
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
	images: ProjectImage[];
}

export type { Tech, ProjectImage, Project };
