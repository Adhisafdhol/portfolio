import type { FC } from "react";

interface InputContainer {
	children: React.ReactNode;
}

const InputContainer: FC<InputContainer> = ({ children }) => {
	return (
		<div className="flex w-[72ch] max-w-[72ch] flex-col items-start gap-[32px]">
			{children}
		</div>
	);
};

export default InputContainer;
