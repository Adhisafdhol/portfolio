import { useRef, type FC, useState, useEffect } from "react";

type VideoRef = React.RefObject<null | HTMLVideoElement>;

interface Callback {
	//eslint-disable-next-line
	(_val: boolean): void;
}

const toggleVideo = (videoRef: VideoRef, callback: Callback): void => {
	const videoEl: null | HTMLVideoElement = videoRef.current;

	if (videoEl) {
		if (videoEl.paused || videoEl.ended) {
			videoEl.play();
			callback(true);
		} else {
			videoEl.pause();
			callback(false);
		}
	}
};

interface VideoProps {
	src: string;
	type: string;
}

const Video: FC<VideoProps> = ({ src, type }) => {
	const videoRef = useRef<null | HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [isControlShown, setIsControlShown] = useState<boolean>(true);
	const timeoutIds = useRef<number[]>([]);

	useEffect(() => {
		const updatePlayState = (): void => {
			setIsPlaying(false);
		};

		const videoEl: null | HTMLVideoElement = videoRef.current;

		if (videoEl) {
			videoEl.addEventListener("ended", updatePlayState);
		}

		return () => {
			if (videoEl) {
				videoEl.removeEventListener("ended", updatePlayState);
			}
		};
	}, []);

	const clearTimeouts = (): void => {
		timeoutIds.current.forEach((id: number) => {
			clearTimeout(id);
		});
		timeoutIds.current = [];
	};

	const hideVideoController = (): void => {
		setIsControlShown(false);
	};

	const showVideoController = (): void => {
		clearTimeouts();
		setIsControlShown(true);
		const id = setTimeout(hideVideoController, 3000);
		timeoutIds.current = [...timeoutIds.current, id];
	};

	const handleMouseLeave = (): void => {
		clearTimeouts();
		if (isPlaying) {
			setIsControlShown(false);
		} else {
			setIsControlShown(true);
		}
	};

	return (
		<div
			className="relative flex items-center justify-center rounded-[16px]"
			onMouseEnter={() => {
				showVideoController();
			}}
			onMouseMove={() => {
				showVideoController();
			}}>
			<video
				ref={videoRef}
				className="rounded-[16px]"
				onMouseLeave={handleMouseLeave}>
				<source src={src} type={type} />
			</video>
			<button
				className={
					`icon play-icon absolute flex h-[64px] w-[64px] items-center
					justify-center rounded-full bg-[rgba(7,7,7,0.6)] 
					will-change-transform hover:bg-[rgba(234,243,250,0.3)] sm:h-[128px]
					sm:w-[128px]` +
					(isPlaying ? " pause-icon" : " play-icon") +
					(isControlShown ? "" : " hidden")
				}
				aria-label={isPlaying ? "Pause video" : "Play video"}
				onClick={() =>
					toggleVideo(videoRef, (val: boolean) => {
						setIsPlaying(val);
						clearTimeouts();
						const id = setTimeout(hideVideoController, 3000);
						timeoutIds.current = [...timeoutIds.current, id];
					})
				}
			/>
		</div>
	);
};

export default Video;
