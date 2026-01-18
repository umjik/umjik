export type AnimatableStyle = {
	opacity?: number;
	translateX?: number;
	translateY?: number;
};

export interface MotionProps {
	initial?: AnimatableStyle | false;
	animate?: AnimatableStyle;
}
