import { useRef, useState, type FC } from "react";
import type { ProjectContribution as ProjectContributionI } from "../types/types";

interface ContributionProps {
	contribution: ProjectContributionI;
}

const Contribution: FC<ContributionProps> = ({ contribution }) => {
	const [isOpen, setisOpen] = useState<boolean>(false);
	const contributionUListRef = useRef<null | HTMLUListElement>(null);

	return (
		<section className="flex flex-col items-start gap-[16px]">
			<div className="flex items-center gap-[16px]">
				<h4 className="text-h5 font-bold">{contribution.title}</h4>
				<button
					onClick={() => {
						setisOpen(!isOpen);
					}}
					aria-label={(isOpen ? "Close " : "Open ") + `${contribution.title}`}
					className={
						"icon-full forward-arrow-icon flex h-[24px] w-[24px]" +
						(isOpen ? " rotate-contribution-active" : " rotate-contribution")
					}
				/>
			</div>
			<ul
				ref={contributionUListRef}
				className={
					"flex w-[72ch] flex-col items-start" +
					(isOpen ? " expand-down" : " pinch-up overflow-hidden")
				}>
				{contribution.contributions.map(
					(contribution: string, index: number) => {
						return (
							<li
								key={index}
								className={`w-full border-b-[1px] 
                      border-b-[rgba(221,222,227,0.2)] py-[32px] text-left`}>
								{contribution}
							</li>
						);
					},
				)}
			</ul>
		</section>
	);
};

export default Contribution;
