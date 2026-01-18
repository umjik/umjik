import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DetailScreen, HomeScreen, type RootStackParamList } from "./src/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={styles.container}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#fff",
							},
							headerTitleStyle: {
								fontWeight: "600",
							},
							headerShadowVisible: false,
						}}
					>
						<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
						<Stack.Screen
							name="Detail"
							component={DetailScreen}
							options={({ route }) => ({
								title: route.params.exampleKey,
								headerBackTitle: "Back",
							})}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
