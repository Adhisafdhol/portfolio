import { useRef, type FC } from "react";
import type { ProjectLink } from "../types/types";

interface ProjectLinkButtonProps {
	link: ProjectLink;
}

const ProjectLinkButton: FC<ProjectLinkButtonProps> = ({ link }) => {
	const buttonIconRef = useRef<null | HTMLSpanElement>(null);

	return (
		<button
			onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
				const button: HTMLButtonElement = e.target as HTMLButtonElement;
				button.classList.remove("animate-button-out");
				button.classList.add("animate-button-in");
				buttonIconRef.current?.classList.remove("animate-button-icon-out");
				buttonIconRef.current?.classList.add(
					"animate-button-icon-in",
					"scale-150",
					"translate-x-[8px]",
				);
			}}
			onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
				const button: HTMLButtonElement = e.target as HTMLButtonElement;
				button.classList.remove("animate-button-in");
				button.classList.add("animate-button-out");
				buttonIconRef.current?.classList.remove(
					"animate-button-icon-in",
					"scale-150",
					"translate-x-[8px]",
				);
				buttonIconRef.current?.classList.add("animate-button-icon-out");
			}}
			className={`bg-gr-project-btn text-h6 text-fg-1 
							hover:animate-button-in flex gap-[8px] rounded-[4px] 
							bg-linear-to-r bg-size-[300%] px-[32px] py-[16px] 
							hover:rounded-[16px] hover:bg-position-[100%]`}>
			<a href={link.url}>{link.text}</a>
			<span
				ref={buttonIconRef}
				className={`icon visit-arrow-icon animate-button-icon flex h-[1.5em]
							w-[1.5em] items-center`}></span>
		</button>
	);
};

export default ProjectLinkButton;
