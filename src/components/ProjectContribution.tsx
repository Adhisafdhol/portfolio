import type { FC } from "react";
import type { ProjectContribution as ProjectContributionI } from "../types/types";
import Contribution from "./Contribution";

interface ProjectContributionProps {
	contributions: ProjectContributionI[];
}

const ProjectContribution: FC<ProjectContributionProps> = ({
	contributions,
}) => {
	return (
		<section className="flex flex-col items-start gap-[32px]">
			<h3
				className={`text-h4 bg-gr-brand-main bg-clip-text font-bold
      text-[transparent] `}>
				Contribution
			</h3>
			<div>
				{contributions.map((contribution: ProjectContributionI) => {
					return (
						<Contribution
							contribution={contribution}
							key={contribution.title}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectContribution;
