import type { ComponentType } from "react";

export type MotionComponent<P extends object> = ComponentType<P>;

export type AnimatableStyle = {
	opacity?: number;
	translateX?: number;
	translateY?: number;
	scaleX?: number;
	scaleY?: number;
};

export interface MotionProps {
	initial?: AnimatableStyle | false;
	animate?: AnimatableStyle;
}
