import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Motion } from "umjik";

export const FadeIn = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<View style={styles.wrapper}>
			<Motion.View
				style={styles.container}
				initial={{ opacity: 0, translateY: 20 }}
				animate={isVisible ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
			>
				<Text style={styles.text}>FadeIn Animation!</Text>
			</Motion.View>

			<View style={styles.buttonContainer}>
				<Button title={isVisible ? "Hide" : "Show"} onPress={() => setIsVisible((prev) => !prev)} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 40,
		alignItems: "center",
	},
	container: {
		padding: 20,
		backgroundColor: "#007AFF",
		borderRadius: 12,
	},
	text: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	buttonContainer: {
		marginTop: 20,
	},
});
