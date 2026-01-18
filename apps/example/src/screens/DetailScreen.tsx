import type { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fade, ScaleX, ScaleY, TranslateX, TranslateY } from "../examples";
import type { RootStackParamList } from "./types";

const exampleComponents = {
	Fade,
	TranslateX,
	TranslateY,
	ScaleX,
	ScaleY,
} as const;

interface DetailScreenProps {
	route: RouteProp<RootStackParamList, "Detail">;
	navigation: NativeStackNavigationProp<RootStackParamList, "Detail">;
}

export const DetailScreen = ({ route }: DetailScreenProps) => {
	const { exampleKey } = route.params;
	const ExampleComponent = exampleComponents[exampleKey];

	return (
		<SafeAreaView style={styles.safeArea} edges={["bottom"]}>
			<View style={styles.container}>
				<ExampleComponent />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
