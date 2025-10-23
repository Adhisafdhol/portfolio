import type { FC } from "react";
import type { Project as ProjectI } from "../types/types";
import ProjectPreviewBox from "./ProjectPreviewBox";

interface ProjectProps {
	project: ProjectI;
}

const Project: FC<ProjectProps> = ({ project }) => {
	return (
		<article className="flex flex-col items-start gap-[32px]">
			<h3
				className={
					`text-h4 bg-linear-to-r bg-clip-text font-extrabold
					text-[transparent]` + ` ${project.title.styles}`
				}>
				{project.title.content}
			</h3>
			<p className="text-h6 text-fg-2 max-w-[72ch] text-start font-bold">
				{project.about}
			</p>
			<ProjectPreviewBox previews={project.previews} />
		</article>
	);
};

export default Project;
