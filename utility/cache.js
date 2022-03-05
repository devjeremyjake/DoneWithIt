import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiredTime = 5;

const isExpired = (item) => {
	const now = moment(Date.now());
	const storedTime = moment(item.timeStamp);
	return now.diff(storedTime, 'minutes') > expiredTime;
};

// Cache store
const store = async (key, value) => {
	try {
		const item = {
			value,
			timeStamp: Date.now(),
		};
		await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};

// Get cache value
const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.parse(value);

		if (!item) return null;
		if (isExpired(item)) {
			// Command Query Seperation
			await AsyncStorage.removeItem(prefix + key);
			return null;
		}

		return item.value;
	} catch (error) {
		console.log(error);
	}
};

export default { store, get };