import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const NewListingButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					color={colors.white}
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default NewListingButton;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		height: 80,
		width: 80,
		borderRadius: 40,
		bottom: 30,
		borderColor: colors.white,
		borderWidth: 10,
	},
});
