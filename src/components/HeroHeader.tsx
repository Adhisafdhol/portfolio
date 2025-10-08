const HeroHeader = () => {
	return (
		<div className="bg-bg-gr-1 relative min-h-[100dvh] min-w-full">
			<div className="absolute max-h-[100dvh] max-w-[100dvw] overflow-hidden">
				<svg
					width="1920"
					height="1080"
					viewBox="0 0 1920 1080"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_689_81)">
						<path
							d="M1398.31 382.843C1324.79 475.171 1352.8 631.649 1265.48 
						711.06C1121.29 842.202 870.153 774.43 705.135 878.157C600.408 
						943.987 455.387 1152.63 455.387 1152.63C455.387 1152.63 572.992 
						998.849 660.153 969.977C881.901 896.525 1265.48 980.866 1413.92 
						883.379C1510.73 819.798 1481.37 628.396 1587.71 582.505C1696.02 
						535.76 1933.06 734.093 1932.13 663.947C1930.64 550.904 1921.95 
						16.5684 1921.95 16.5684C1921.95 16.5684 1531 216.21 1398.31 
						382.843Z"
							fill="url(#paint0_radial_689_81)"
						/>
						<path
							d="M1400.04 366.917C1326.52 459.246 1354.53 615.723 1267.21 
							695.134C1123.02 826.277 871.882 758.504 706.864 862.232C602.136 
							928.061 457.115 1136.71 457.115 1136.71C457.115 1136.71 578.859 
							992.434 661.881 954.052C852.757 865.807 1114.79 988.46 1286.77 
							867.453C1439.44 760.039 1424.86 475.554 1546.48 371.317C1668.09 
							267.081 1848.8 350.972 1926.05 241.876C1972.52 176.249 1923.68 
							0.642822 1923.68 0.642822C1923.68 0.642822 1532.73 200.285 
							1400.04 366.917Z"
							fill="url(#paint1_radial_689_81)"
						/>
					</g>
					<defs>
						<radialGradient
							id="paint0_radial_689_81"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(1367.73 860.744) scale(738.374 
						568.033)">
							<stop stop-color="#D77A3F" />
							<stop offset="0.5" stop-color="#D40028" />
							<stop offset="1" />
						</radialGradient>
						<radialGradient
							id="paint1_radial_689_81"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(1191.58 568.676) 
						scale(734.469 568.033)">
							<stop stop-color="#D77A3F" />
							<stop offset="0.490385" stop-color="#D40028" />
							<stop offset="0.764423" stop-color="#3BC1E7">
								<animate
									attributeName="stop-color"
									values="#D40028;#3BC1E7;#FEDE17;#5306D8;#070707;#000000;#070707;#5306D8;
									#FEDE17;#3BC1E7;#D40028;"
									dur="60s"
									repeatCount="indefinite"
								/>
								<animate
									attributeName="offset"
									values="0.764423;1;0.6;1.764423;"
									dur="60s"
									repeatCount="indefinite"
								/>
							</stop>
						</radialGradient>
						<clipPath id="clip0_689_81">
							<rect width="1920" height="1080" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default HeroHeader;
