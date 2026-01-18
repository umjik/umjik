import { Pressable, StyleSheet, Text } from "react-native";

interface CardProps {
	title: string;
	onPress: () => void;
}

export const Card = ({ title, onPress }: CardProps) => {
	return (
		<Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "31%",
		aspectRatio: 1,
		marginBottom: 12,
		backgroundColor: "#f5f5f5",
		borderRadius: 12,
		padding: 12,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	pressed: {
		opacity: 0.7,
		transform: [{ scale: 0.95 }],
	},
	title: {
		fontSize: 14,
		fontWeight: "600",
		color: "#333",
		textAlign: "center",
	},
});
