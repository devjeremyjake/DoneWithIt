import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from '../navigation/AccountNavigator';
import NewListingButton from '../navigation/NewListingButton';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigator from '../navigation/FeedNavigator';
import route from './routes';

// Tab Navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			tabBarActiveColor: 'tomato',
			tabBarInactiveTintColor: 'gray',
			headerShown: false,
		}}
	>
		<Tab.Screen
			name="Feeds"
			component={FeedNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Listing"
			component={ListingEditScreen}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<NewListingButton
						onPress={() => navigation.navigate(route.LISTING_MAIN)}
					/>
				),
			})}
		/>
		<Tab.Screen
			name="Account"
			component={AccountNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="account-outline"
						size={size}
						color={color}
					/>
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
