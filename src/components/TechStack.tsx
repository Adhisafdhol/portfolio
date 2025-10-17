import { useContext, type FC } from "react";
import type { Tech } from "../types/types";
import { TechStackContext } from "../contexts/techStack";

interface TechStackProps {
	techStack: Tech[];
}

const TechStack: FC<TechStackProps> = ({ techStack }) => {
	const { techStackListRef } = useContext(TechStackContext);

	return (
		<ul ref={techStackListRef} className="flex flex-wrap gap-[32px]">
			{techStack.map((tech: Tech, index: number) => {
				return (
					<li
						key={index}
						className={`bg-bg-1 flex items-center gap-[16px] rounded-[8px] 
							px-[32px] py-[16px]`}>
						<img width="48px" height="48px" src={tech.icon.default} />
						{tech.text}
					</li>
				);
			})}
		</ul>
	);
};

export default TechStack;
