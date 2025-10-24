import type { FC } from "react";
import type { Project as ProjectI, ProjectLink } from "../types/types";
import ProjectPreviewBox from "./ProjectPreviewBox";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinkButton from "./ProjectLinkButton";

interface ProjectProps {
	project: ProjectI;
}

const Project: FC<ProjectProps> = ({ project }) => {
	return (
		<article className="flex flex-col items-start gap-[32px] py-[32px]">
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
			<div>
				{project.links.map((link: ProjectLink) => {
					return <ProjectLinkButton link={link} />;
				})}
			</div>
			{project.techStack.length ? (
				<ProjectTechStack techStack={project.techStack} />
			) : null}
		</article>
	);
};

export default Project;
