import { Button, StyleSheet, View } from "react-native";
import { Motion } from "umjik";
import { useReplay } from "../../hooks";

export const ScaleX = () => {
	const [key, replay] = useReplay();

	return (
		<View style={styles.wrapper}>
			<Motion.View
				key={key}
				style={styles.container}
				initial={{ scaleX: 0.5 }}
				animate={{ scaleX: 1.5 }}
			/>
			<View style={styles.buttonContainer}>
				<Button title="Replay" onPress={replay} />
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
	buttonContainer: {
		marginTop: 20,
	},
});
