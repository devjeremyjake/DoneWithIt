import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';

import PostListing from '../components/PostListing';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
	{
		title: 'My Listings',
		icon: { name: 'format-list-bulleted', backgroundColor: colors.primary },
	},
	{
		title: 'My Messages',
		icon: { name: 'email', backgroundColor: colors.secondary },
	},
];

const AccountScreen = () => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				<PostListing
					title="Jeremy Jake"
					subTitle="devjeremyjake@gmail.com"
					image={require('../assets/mosh.jpg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<PostListing
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>
			<PostListing
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.lightGrey,
		flex: 1,
	},
	container: {
		marginVertical: 20,
	},
});

export default AccountScreen;
