import { createContext } from "react";

interface TechStackContext {
	techStackListRef: null | React.RefObject<null | HTMLUListElement>;
}

const TechStackContext = createContext<TechStackContext>({
	techStackListRef: null,
});

export { TechStackContext };
