import React from 'react';
import { View, Text } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					fontSize: 20,
					fontWeight: 'bold',
					textAlign: 'center',
					color: 'orange',
				}}
			>
				I love React Native!!!!
			</Text>
			<MaterialCommunityIcons name="email" size={90} color="tomato" />
		</View>
	);
}
