
import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

export default StyleSheet.create({
	buttonContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		minWidth: "25%",
		width: "auto",
	},

	buttonIcon: {
		fontSize: 16, // defines the size of the Font Awesome Icon
		color: "#92929D",
	},

	buttonText: {
		fontSize: 13,
		color: "#92929D",
	},

	buttonContainerActive: {
		transform: [{ scale: 1.07 }],
	},

	buttonIconActive: {
		color: "#000",
	},

	buttonTextActive: {
		color: "#000",
	},
});