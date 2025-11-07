import projects from "../data/projects";
import Projects from "./Projects";

const ProjectSection = () => {
	return (
		<section className="flex flex-col gap-[64px] p-[16px] sm:p-[64px]">
			<h2 className="text-h2 text-start font-black">Projects</h2>
			<Projects projects={projects} />
		</section>
	);
};

export default ProjectSection;
