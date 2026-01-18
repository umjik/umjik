import { MOTION_PROPS } from "../consts";

export const hasMotionProps = (props: object): boolean => {
	if (typeof props !== "object" || props === null) return false;

	return Object.keys(props).some((key) => MOTION_PROPS.has(key));
};
