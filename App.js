import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';
import OfflineNotice from './components/OfflineNotice';

export default function App() {
	return (
		<>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
				{/* <AuthNavigator /> */}
			</NavigationContainer>
		</>
	);
}
