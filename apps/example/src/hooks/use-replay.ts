import { useReducer } from "react";

export const useReplay = () => {
	const [key, replay] = useReducer((x) => x + 1, 0);

	return [key, replay] as const;
};
