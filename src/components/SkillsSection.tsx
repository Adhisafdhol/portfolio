import TechStack from "./TechStack";
import techStack from "../data/techStack";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechStackContext } from "../contexts/techStack";

const SkillsSection = () => {
	const sectionRef = useRef<null | HTMLElement>(null);
	const headingRef = useRef<null | HTMLHeadingElement>(null);
	const techStackListRef = useRef<null | HTMLUListElement>(null);

	useEffect(() => {
		gsap.registerPlugin(Observer, ScrollTrigger);
		const sectionEl: null | HTMLElement = sectionRef.current;
		const headingEl: null | HTMLHeadingElement = headingRef.current;
		const techStackListEl: null | HTMLUListElement = techStackListRef.current;

		document.fonts.ready.then(() => {
			if (headingEl && techStackListEl && sectionEl) {
				const splitHeading: SplitText = new SplitText(headingEl, {
					type: "chars, words, lines",
					linesClassName: "clip-text",
				});

				let hasRun: boolean = false;

				interface GoToSection {
					(): void;
				}

				const goToSection: GoToSection = () => {
					const timeline = gsap.timeline({
						onStart: () => {
							hasRun = true;
						},
					});

					timeline
						.fromTo(
							sectionEl,
							{
								autoAlpha: 0,
								yPercent: 150,
							},
							{
								autoAlpha: 1,
								yPercent: 0,
								duration: 0.6,
								ease: "power2",
							},
						)
						.fromTo(
							splitHeading.chars,
							{
								yPercent: 30,
								autoAlpha: 0.6,
							},
							{
								yPercent: 0,
								autoAlpha: 1,
								duration: 0.8,
								ease: "power2",
							},
							0.3,
						)
						.fromTo(
							techStackListEl,
							{
								autoAlpha: 0.6,
								yPercent: 30,
							},
							{
								autoAlpha: 1,
								yPercent: 0,
								duration: 0.8,
								ease: "power2",
							},
							0.3,
						);
				};

				Observer.create({
					type: "wheel, touch, pointer",
					wheelSpeed: -0.5,
					onUp: () => !hasRun && goToSection(),
					tolerance: 10,
				});
			}
		});

		return () => {};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-bg-gr-1 flex min-h-[100dvh] w-full items-center 
		p-[64px]">
			<div
				className="bg-gr-icy flex flex-col items-start gap-[32px] 
			rounded-[16px] p-[32px]">
				<h2 ref={headingRef} className="text-h3 text-bg-1 font-bold">
					Tech-Stack
				</h2>
				<TechStackContext
					value={{
						techStackListRef: techStackListRef,
					}}>
					<TechStack techStack={techStack} />
				</TechStackContext>
			</div>
		</section>
	);
};

export default SkillsSection;
