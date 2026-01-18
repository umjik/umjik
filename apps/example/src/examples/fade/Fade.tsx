import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Motion } from "umjik";

export const Fade = () => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<View style={styles.wrapper}>
			<Motion.View
				style={styles.container}
				initial={{ opacity: 1 }}
				animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
			/>
			<View style={styles.buttonContainer}>
				<Button
					title={isVisible ? "Fade Out" : "Fade In"}
					onPress={() => setIsVisible((prev) => !prev)}
				/>
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
		width: 100,
		height: 100,
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
