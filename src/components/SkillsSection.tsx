import TechStack from "./TechStack";
import techStack from "../data/techStack";

const SkillsSection = () => {
	return (
		<section
			className="bg-bg-gr-1 flex min-h-[100dvh] w-full items-center 
		p-[64px]">
			<div
				className="bg-gr-icy flex flex-col items-start gap-[32px] 
			rounded-[16px] p-[32px]">
				<h2 className="text-h2 text-bg-1 font-bold">Tech-Stack</h2>
				<TechStack techStack={techStack} />
			</div>
		</section>
	);
};

export default SkillsSection;
