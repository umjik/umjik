import { Text as RNText, View as RNView } from "react-native";
import { createAnimatedComponent } from "react-native-reanimated";
import { createMotionComponent } from "../factory";

const Animated = {
	View: createAnimatedComponent(RNView),
	Text: createAnimatedComponent(RNText),
};

export namespace Motion {
	export const View = createMotionComponent(Animated.View);
	export const Text = createMotionComponent(Animated.Text);
}
