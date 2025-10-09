import { useEffect, useRef, useState } from "react";

const fromGradients: string[] = [
	"from-brand-2",
	"from-brand-3",
	"from-brand-5",
	"from-brand-4",
	"from-brand-3",
	"from-brand-6",
];

const toGradients: string[] = [
	"to-brand-1",
	"to-brand-2",
	"to-brand-3",
	"to-brand-4",
	"to-brand-5",
];

const HeroHeader = () => {
	const gradientRef = useRef<null | HTMLParagraphElement>(null);
	const [fromGradientIndex, setFromGradientIndex] = useState<number>(0);
	const [isReversed, setIsReversed] = useState<boolean>(false);

	useEffect(() => {
		if (fromGradientIndex === 0) {
			setIsReversed(false);
		}

		if (fromGradientIndex === fromGradients.length - 1) {
			setIsReversed(true);
		}
		const updateGradient = () => {
			if (isReversed) {
				setFromGradientIndex(fromGradientIndex - 1);
			} else {
				setFromGradientIndex(fromGradientIndex + 1);
			}
			console.log(fromGradientIndex);
		};

		const intervalId = setInterval(updateGradient, 30 * 1000);

		gradientRef.current?.classList.remove("animate-slide-fade-in");
		gradientRef.current?.classList.add("animate-slide-fade-in");

		return () => {
			clearInterval(intervalId);
		};
	}, [fromGradientIndex, isReversed]);

	return (
		<header
			className="bg-bg-gr-1 relative flex min-h-[100dvh] min-w-full
		flex-col items-start justify-center gap-[64px] p-[64px]">
			<div className="z-10 flex flex-col items-start">
				<h1 className="text-h1 animate-slide-in font-black">Adhis Afdhol</h1>
				<p
					ref={gradientRef}
					className={
						`text-h3 bg-linear-to-r bg-clip-text font-bold text-[transparent] 
						transition-all` +
						" " +
						fromGradients[fromGradientIndex] +
						" " +
						toGradients[0]
					}>
					Fullstack Developer
				</p>
			</div>
			<p className="text-h5 z-10 mb-[16px] text-start">
				Exploring The Art of <span className="font-light italic">Creating</span>
				<br />
				<span className="text-h3 font-semibold">Innovative,</span>
				<br />
				<span className="text-h3 font-semibold">Intuitive,</span>
				<br />
				<span className="text-h3 font-semibold">and Maintainable</span>
				<br />
				<span className="text-h4">software.</span>
			</p>

			<div
				className={`pointer-events-none absolute top-0 left-0 max-h-[100dvh] 
				max-w-[100dvw] overflow-hidden`}>
				<div className="relative top-0 h-[100dvh] w-[100vw]">
					<svg
						className="calc(100dvh * 1.33) absolute top-0 right-0 z-0 h-[100dvh]"
						viewBox="0 0 1440 1080"
						fill="none"
						version="1.1"
						id="svg7"
						xmlns="http://www.w3.org/2000/svg">
						<g
							clip-path="url(#clip0_689_81)"
							id="g2"
							transform="matrix(1.0005956,0,0,1.0005956,-421.14355,-3.828639e-4)">
							<path
								d="m 1364.8506,347.99304 c -69.8504,87.71962 -43.2385,236.3873 
       -126.2,311.83464 -136.993,124.59629 -375.59453,60.20701 
       -532.37595,158.75666 -99.49974,62.54421 -238.86049,258.87936 
       -238.86049,258.87936 0,0 113.31317,-144.21148 196.12368,-171.64239 
       210.67985,-69.78578 575.11276,10.3455 716.14366,-82.27562 91.9779,
       -60.40747 64.0833,-242.25598 165.1155,-285.85641 102.9039,-44.41181 
       328.1125,144.02175 327.2289,77.37697 -1.4156,-107.40067 -9.6718,
       -615.06586966877 -9.6718,-615.06586966877 0,0 -371.4365,189.67684966877 
       -497.5035,347.99265966877 z"
								fill="url(#paint0_radial_689_81)"
								id="path1"
							/>
							<path
								d="m 1363.2147,345.99211 c -69.85,87.72013 -43.2382,236.38613 
       -126.1994,311.83311 -136.9924,124.59662 -375.59361,60.2067 
       -532.37427,158.75682 -99.5002,62.54296 -237.28206,260.77666 
       -237.28206,260.77666 0,0 115.6668,-137.07406 194.54452,-173.54012 
       181.34788,-83.83999 430.30031,32.69043 593.69541,-82.27616 145.049,
       -102.05212 131.1968,-372.33624 246.7458,-471.36995 115.5395,-99.03276 
       287.2289,-19.32942 360.6227,-122.97958 44.1503,-62.35104 -2.2517,
       -229.1913384 -2.2517,-229.1913384 0,0 -371.4346,189.6764684 
       -497.501,347.9905584 z"
								fill="url(#paint1_radial_689_81)"
								id="path2"
							/>
						</g>
						<defs id="defs7">
							<radialGradient
								id="paint0_radial_689_81"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="matrix(701.51939,0,0,539.68066,1335.7969,802.04047)">
								<stop stop-color="#D77A3F" id="stop2" />
								<stop offset="0.5" stop-color="#D40028" id="stop3" />
								<stop offset="1" id="stop4" />
							</radialGradient>
							<radialGradient
								id="paint1_radial_689_81"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="matrix(697.80588,0,0,539.67801,1165.1606,537.67973)">
								<stop stop-color="#D77A3F" id="stop5" />
								<stop offset="0.490385" stop-color="#D40028" id="stop6" />
								<stop offset="0.764423" stop-color="#3BC1E7" id="stop7">
									<animate
										attributeName="stop-color"
										values="#D40028;#3BC1E7;#FEDE17;#5306D8;#3BC1E7;#4056BC;#3BC1E7;#5306D8;
									#FEDE17;#3BC1E7;#D40028;"
										dur="360s"
										repeatCount="indefinite"
									/>
									<animate
										attributeName="offset"
										values="0.764423;1;0.6;1.764423;"
										dur="360s"
										repeatCount="indefinite"
									/>{" "}
								</stop>
							</radialGradient>
							<clipPath id="clip0_689_81">
								<rect
									width="1920"
									height="1080"
									fill="#ffffff"
									id="rect7"
									x="0"
									y="0"
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
		</header>
	);
};

export default HeroHeader;
