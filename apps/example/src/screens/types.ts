export type ExampleKey =
	| "Fade"
	| "TranslateX"
	| "TranslateY"
	| "ScaleX"
	| "ScaleY";

export type RootStackParamList = {
	Home: undefined;
	Detail: { exampleKey: ExampleKey };
};
