import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, type FC } from "react";

interface HeroHeadingProps {
	children: React.ReactNode;
}

const HeroHeading: FC<HeroHeadingProps> = ({ children }) => {
	const refEl = useRef<null | HTMLHeadingElement>(null);

	useEffect(() => {
		const el = refEl.current;

		if (el) {
			const split = SplitText.create(el);

			gsap.from(split.chars, {
				x: -100,
				y: 8,
				duration: 1,
				stagger: 0.06,
			});
		}
	}, []);

	return (
		<h1 ref={refEl} className="text-h1 animate-slide-in font-black">
			{children}
		</h1>
	);
};

export default HeroHeading;
