import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';

function ListingsScreen({ navigation }) {
	const [listings, setListing] = useState([]);

	const loadListings = async () => {
		const response = await listingsApi.getListings();
		setListing(response.data);
	};

	useEffect(() => {
		loadListings();
	}, []);
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price}
						imageUrl={item.images[0].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
