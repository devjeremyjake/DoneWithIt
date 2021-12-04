import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './navigation/AuthNavigation';
import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
