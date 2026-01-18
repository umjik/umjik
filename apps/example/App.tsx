import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FadeIn } from "./src";

export default function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Umjik Example</Text>
				<Text style={styles.subtitle}>Animation library for React Native</Text>
				<StatusBar style="auto" />
				<FadeIn />
			</View>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: "#666",
	},
});
