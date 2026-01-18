import type { ComponentProps, ComponentRef, PropsWithoutRef } from "react";
import { createElement, forwardRef } from "react";
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { PHYSICAL_KEYS, TRANSFORM_KEYS } from "../consts";
import { useIsomorphicLayoutEffect } from "../hooks";
import type { AnimatableStyle, MotionComponent, MotionProps } from "../types";
import { hasMotionProps } from "../utils";

export function createMotionComponent<C extends MotionComponent<any>>(Component: C) {
	type OriginalProps = ComponentProps<C>;
	type Props = PropsWithoutRef<OriginalProps & MotionProps>;
	type Ref = ComponentRef<C>;

	const AnimatedInner = forwardRef<Ref, Props>((_props, ref) => {
		const props = _props as MotionProps & { style?: any; [key: string]: any };
		const { initial = false, animate = {}, style = {}, ...rest } = props;

		const initialValue = initial === false ? animate : initial;
		const targetStyles = useSharedValue<AnimatableStyle>(initialValue);

		useIsomorphicLayoutEffect(() => {
			if (animate) {
				targetStyles.value = animate;
			}
		}, [animate, targetStyles]);

		const animatedStyle = useAnimatedStyle(() => {
			const result: Record<string, any> = {};
			const transforms: any[] = [];

			for (const [key, value] of Object.entries(targetStyles.value)) {
				if (value == null) continue;

				const animatedValue = PHYSICAL_KEYS.has(key)
					? withSpring(value, {
							damping: 10,
							mass: 1,
							stiffness: 100,
						})
					: withTiming(value, {
							duration: 300,
						});

				if (TRANSFORM_KEYS.has(key)) {
					transforms.push({ [key]: animatedValue });
				} else {
					result[key] = animatedValue;
				}
			}

			if (transforms.length > 0) {
				result.transform = transforms;
			}

			return result;
		});

		return createElement(Component, {
			...rest,
			ref,
			style: [style, animatedStyle],
		});
	});

	const ForwardedMotionComponent = forwardRef<Ref, Props>((_props, ref) => {
		const props = _props as MotionProps & { [key: string]: any };

		if (!hasMotionProps(props)) {
			return createElement(Component, { ...props, ref } as any);
		}

		return createElement(AnimatedInner, { ...props, ref } as any);
	});

	ForwardedMotionComponent.displayName = `Motion(${
		typeof Component === "string"
			? Component
			: Component.displayName || Component.name || "Component"
	})`;

	return ForwardedMotionComponent;
}
