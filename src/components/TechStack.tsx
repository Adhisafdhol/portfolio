import type { FC } from "react";
import type { Tech } from "../types/types";

interface TechStackProps {
	techStack: Tech[];
}

const TechStack: FC<TechStackProps> = ({ techStack }) => {
	return (
		<ul className="flex flex-wrap gap-[32px]">
			{techStack.map((tech: Tech) => {
				return (
					<li className="bg-bg-1 flex items-center gap-[16px] rounded-[8px] px-[32px] py-[16px]">
						<img width="48px" height="48px" src={tech.icon} />
						{tech.text}
					</li>
				);
			})}
		</ul>
	);
};

export default TechStack;
