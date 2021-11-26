import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<AppText style={styles.Text}>{label}</AppText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	Text: {
		padding: 18,
	},
});

export default PickerItem;
