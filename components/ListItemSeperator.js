import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ListItemSeperator = () => {
	return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
	seperator: {
		width: '100%',
		height: 5,
		backgroundColor: colors.lightGrey,
	},
});

export default ListItemSeperator;
