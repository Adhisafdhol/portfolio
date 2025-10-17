import { useEffect, useRef, type FC } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

interface RollingTextProps {
	children: React.ReactNode;
	classes: string;
}

const RollingText: FC<RollingTextProps> = ({ children, classes }) => {
	const refEl = useRef<null | HTMLSpanElement>(null);

	useEffect(() => {
		const el = refEl.current;

		document.fonts.ready.then(() => {
			if (el) {
				const split = SplitText.create(el);

				gsap.from(split.chars, {
					rotation: 360,
					x: 96,
					y: 32,
					duration: 1,
					stagger: 0.06,
				});
			}
		});
	}, []);

	return (
		<span ref={refEl} className={classes}>
			{children}
		</span>
	);
};

export default RollingText;
