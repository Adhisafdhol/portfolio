import { useState, type FC } from "react";
import type { ProjectPreview } from "../types/types";
import Video from "./Video";

interface ProjectPreviewProps {
	previews: ProjectPreview[];
}

const ProjectPreviewBox: FC<ProjectPreviewProps> = ({ previews }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<section className="flex flex-col items-center gap-[32px]">
			<div className="flex flex-col gap-[32px] rounded-[8px] rounded-b-[32px]">
				<ul
					className="text-h6 aspect-[16/9] w-[min(72ch,100%)] max-w-[72ch]
				overflow-hidden">
					{previews.map((preview: ProjectPreview, index: number) => {
						return (
							<li
								key={index}
								className={
									"h-full w-full rounded-[8px]" +
									(activeIndex === index ? " z-10" : " z-[-1] hidden")
								}>
								{preview.type.split("/")[0] === "image" ? (
									<img
										className="rounded-[inherit]"
										src={preview.url}
										alt={preview.alt}
									/>
								) : (
									<Video src={preview.url} type={preview.type} />
								)}
							</li>
						);
					})}
				</ul>
				<div className="flex justify-center">
					<p
						className={`text-p bg-gr-icy flex-none bg-linear-to-r bg-clip-text
						font-bold text-[transparent]`}>
						{previews[activeIndex]?.description}
					</p>
				</div>
			</div>
			<nav className="flex gap-[16px]">
				{previews.map((_preview: ProjectPreview, index: number) => {
					return (
						<button
							key={index}
							className={
								`hover:border-brand-3 min-h-[12px] min-w-[12px] rounded-full
								border-[1px] border-[transparent] backdrop-blur-md
								hover:bg-[rgba(59,193,231,0.6)]
								sm:min-h-[16px] sm:min-w-[16px]` +
								(activeIndex === index
									? " bg-gr-icy animate-expand w-[36px] sm:w-[48px]"
									: " bg-bg-3 animate-pinch")
							}
							onClick={() => {
								setActiveIndex(index);
							}}></button>
					);
				})}
			</nav>
		</section>
	);
};

export default ProjectPreviewBox;
