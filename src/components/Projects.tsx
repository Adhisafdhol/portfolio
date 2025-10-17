import type { FC } from "react";
import type { Project as ProjectI } from "../types/types";
import Project from "./Project";

interface ProjectsProps {
	projects: ProjectI[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
	return (
		<>
			{projects.map((project: ProjectI, index: number) => {
				return <Project project={project} key={index} />;
			})}
		</>
	);
};

export default Projects;
