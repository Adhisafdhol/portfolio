import { useContext, type FC } from "react";
import type { Tech } from "../types/types";
import { TechStackContext } from "../contexts/techStack";

interface TechStackProps {
	techStack: Tech[];
}

const TechStack: FC<TechStackProps> = ({ techStack }) => {
	const { techStackListRef } = useContext(TechStackContext);

	return (
		<ul
			ref={techStackListRef}
			className="flex flex-wrap gap-[16px] sm:gap-[32px]">
			{techStack.map((tech: Tech, index: number) => {
				return (
					<li
						key={index}
						className={`bg-bg-1 flex items-center gap-[16px] rounded-[8px] 
							px-[24px] py-[16px] sm:px-[32px] sm:py-[16px]`}>
						<img
							className="h-[24px] w-[24px] sm:h-[32px] sm:w-[32ppx]  md:h-[40px]
							md:w-[40px] lg:h-[48px] lg:w-[48px]"
							src={tech.icon.dark}
						/>
						{tech.text}
					</li>
				);
			})}
		</ul>
	);
};

export default TechStack;
