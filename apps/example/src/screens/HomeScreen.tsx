import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../components";
import type { RootStackParamList } from "./types";

const examples = [
	{ title: "Fade", key: "Fade" },
	{ title: "TranslateX", key: "TranslateX" },
	{ title: "TranslateY", key: "TranslateY" },
	{ title: "ScaleX", key: "ScaleX" },
	{ title: "ScaleY", key: "ScaleY" },
] as const;

interface HomeScreenProps {
	navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<Text style={styles.title}>umjik</Text>
				<Text style={styles.subtitle}>Animation library for React Native</Text>
			</View>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.grid}>
					{examples.map(({ title, key }) => (
						<Card
							key={key}
							title={title}
							onPress={() => navigation.navigate("Detail", { exampleKey: key })}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
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
	scrollContent: {
		paddingHorizontal: 12,
		paddingBottom: 20,
	},
	grid: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 12,
	},
});
