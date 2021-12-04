import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="welcomeScreen"
			component={WelcomeScreen}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen name="login" component={LoginScreen} />
		<Stack.Screen name="register" component={RegisterScreen} />
	</Stack.Navigator>
);

export default AuthNavigation;
