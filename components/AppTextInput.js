import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import DefaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...rest }) => {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					color="#000"
					size={20}
					style={styles.icon}
				/>
			)}
			<TextInput style={DefaultStyles.text} {...rest} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGrey,
		borderRadius: 20,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
		width: "100%",
	},
	icon: {
		marginRight: 10,
	},
});

export default AppTextInput;
