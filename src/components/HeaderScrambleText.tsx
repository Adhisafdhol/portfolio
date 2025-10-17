import { useEffect, useRef, type FC } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

interface HeaderScrambleTextProps {
	text: string;
	classes: string;
}

const HeaderScrambleText: FC<HeaderScrambleTextProps> = ({ text, classes }) => {
	const refEl = useRef<null | HTMLSpanElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrambleTextPlugin);

		const el = refEl.current;

		document.fonts.ready.then(() => {
			if (el) {
				const st = SplitText.create(refEl.current, {
					type: "chars",
					charsClass: "char",
				});

				st.chars.forEach((char) => {
					gsap.set(char, { attr: { "data-content": char.innerHTML } });
				});

				el.onpointermove = (e) => {
					st.chars.forEach((char) => {
						const charEl = char as HTMLElement;
						const rect = char.getBoundingClientRect();
						const cx = rect.left + rect.width / 2;
						const cy = rect.top + rect.height / 2;
						const dx = e.clientX - cx;
						const dy = e.clientY - cy;
						const dist = Math.sqrt(dx * dx + dy * dy);
						if (dist < 100)
							gsap.from(char, {
								duration: 1.2 - dist / 100,
								y: 16,
								stagger: 0.05,
							});

						gsap.to(char, {
							overwrite: true,
							duration: 1.2 - dist / 100,
							y: 0,
							stagger: 0.05, // 0.05 seconds between each
							scrambleText: {
								text: charEl.dataset.content as string,
								chars: ".:",
								speed: 0.6,
							},
							ease: "none",
						});
					});
				};
			}
		});
	}, []);

	return (
		<span ref={refEl} className={classes + " will-change-transform"}>
			{text}
		</span>
	);
};

export default HeaderScrambleText;
