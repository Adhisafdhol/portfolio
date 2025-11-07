import { Fragment, useRef } from "react";
import aboutMe from "../data/aboutMe";

const AboutMe = () => {
	const buttonIconRef = useRef<null | HTMLButtonElement>(null);
	return (
		<section
			className="bg-gr-bg-1-b flex flex-col items-start gap-[32px] 
		p-[16px] sm:p-[64px]">
			<h2
				className={`text-h4 bg-gr-brand-main bg-clip-text font-bold 
				text-[transparent]`}>
				About me
			</h2>
			<div>
				{aboutMe.profile.map(
					(paragraph: string, index: number): React.JSX.Element => {
						return (
							<Fragment key={index}>
								<p
									className="text-p sm:text-h6 text-fg-2 max-w-[72ch]
								text-start">
									{paragraph}
								</p>
								<br />
							</Fragment>
						);
					},
				)}
			</div>
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
				className={`bg-gr-project-btn text-h6 sm:text-h5 text-fg-1  
							hover:animate-button-in h-h6 flex gap-[8px] 
							rounded-[4px] bg-linear-to-r bg-size-[300%] px-[32px] py-[16px] 
							hover:rounded-[16px] hover:bg-position-[100%] sm:px-[48px]
							sm:py-[24px]`}>
				<div className="flex items-center gap-[16px]">
					<a href={aboutMe.github.url}>{aboutMe.github.text}</a>
					<img
						src={aboutMe.github.icon}
						alt={`${aboutMe.github.text} icon`}
						className="h-[1.5em] min-h-[1.5em] w-[1.5em] min-w-[1.5em]"
					/>
				</div>

				<span
					ref={buttonIconRef}
					className={`icon visit-arrow-icon animate-button-icon flex h-[1.5em]
							w-[1.5em] items-center`}></span>
			</button>
		</section>
	);
};

export default AboutMe;
