import type { FC } from "react";

interface InputContainer {
	children: React.ReactNode;
}

const InputContainer: FC<InputContainer> = ({ children }) => {
	return (
		<div
			className="flex w-[min(72ch,100%)] max-w-[72ch] flex-col items-start
		gap-[32px]">
			{children}
		</div>
	);
};

export default InputContainer;
