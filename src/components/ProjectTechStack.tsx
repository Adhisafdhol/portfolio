import { useRef, useState, type FC } from "react";
import { type Tech } from "../types/types";

interface ProjectTechStackProps {
	techStack: Tech[];
}

const ProjectTechStack: FC<ProjectTechStackProps> = ({ techStack }) => {
	const [startIndex, setStartIndex] = useState<number>(0);
	const carouselRef = useRef<null | HTMLUListElement>(null);
	const lastItemRef = useRef<null | HTMLLIElement>(null);

	return (
		<div
			className={`bg-gr-icy text-h6 relative flex max-w-[min(72ch,100%)] 
				items-center gap-[16px] overflow-hidden scroll-smooth rounded-[16px]
				px-[16px] sm:gap-[32px] sm:px-[32px]`}>
			<button
				onClick={() => {
					const carouselEl: null | HTMLUListElement = carouselRef.current;
					const lastItemEl: null | HTMLLIElement = lastItemRef.current;

					if (startIndex > 0 && carouselEl && lastItemEl) {
						const shownItems: number = Math.floor(
							carouselEl.clientWidth / lastItemEl.getBoundingClientRect().width,
						);
						const nextStartIndex: number =
							shownItems - startIndex >= 0 ? shownItems - startIndex : 0;

						setStartIndex(nextStartIndex);
						carouselRef.current?.children[nextStartIndex].scrollIntoView({
							behavior: "smooth",
							block: "nearest",
							inline: "start",
						});
					}
				}}
				aria-label="Slide back"
				className={`icon-full back-arrow-icon flex h-[24px] min-h-[24px]
					w-[24px] min-w-[24px] items-center rounded-full hover:scale-125
          sm:h-[32px] sm:min-h-[32px] sm:w-[32px] sm:min-w-[32px]`}
			/>
			<ul
				ref={carouselRef}
				className={`text-h6 scrollbar-hidden box-border flex max-w-[72ch] snap-x
				gap-[16px] overflow-x-scroll overflow-y-visible scroll-smooth
				rounded-[16px] py-[16px] pr-[8px] sm:gap-[32px] sm:py-[32px]`}>
				{techStack.map((tech: Tech, index: number) => {
					return (
						<li
							key={tech.text}
							ref={index === techStack.length - 1 ? lastItemRef : null}
							id={`project-tech-stack-carousel-${index}`}
							className={`bg-gr-icy-r rounded-full p-[24px] 
									shadow-[0_4px_4px_rgba(36,41,58,0.25)]`}>
							<img
								src={tech.icon.light}
								alt={tech.text + " icon"}
								className="h-[24px] min-h-[24px] w-[24px] min-w-[24px]
								sm:h-[32px] sm:min-h-[32px] sm:w-[32px] sm:min-w-[32px]"
							/>
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => {
					const carouselEl: null | HTMLUListElement = carouselRef.current;
					const lastItemEl: null | HTMLLIElement = lastItemRef.current;

					if (
						lastItemEl &&
						carouselEl &&
						carouselEl.scrollLeft +
							carouselEl?.clientWidth +
							lastItemEl.getBoundingClientRect().width <
							carouselEl?.scrollWidth
					) {
						const shownItems: number = Math.floor(
							carouselEl.clientWidth / lastItemEl.getBoundingClientRect().width,
						);
						const nextStartIndex: number =
							shownItems + startIndex < techStack.length - 1
								? shownItems + startIndex
								: techStack.length - 1;

						setStartIndex(nextStartIndex);
						carouselRef.current?.children[nextStartIndex].scrollIntoView({
							behavior: "smooth",
							block: "nearest",
							inline: "start",
						});
					} else {
						carouselRef.current?.children[techStack.length - 1].scrollIntoView({
							behavior: "smooth",
							block: "nearest",
							inline: "start",
						});
					}
				}}
				aria-label="Slide forward"
				className={`icon-full forward-arrow-icon flex h-[24px] min-h-[24px] 
					w-[24px] min-w-[24px] items-center rounded-full hover:scale-125
          sm:h-[32px] sm:min-h-[32px] sm:w-[32px] sm:min-w-[32px]`}
			/>
		</div>
	);
};

export default ProjectTechStack;
