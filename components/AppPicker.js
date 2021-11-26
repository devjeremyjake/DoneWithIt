import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Modal,
	Button,
	SafeAreaView,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import DefaultStyles from "../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";

const AppPicker = ({
	icon,
	placeholder,
	items,
	onSelectItem,
	selectedItem,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							color="#000"
							size={20}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons name="chevron-down" color="#000" size={20} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<SafeAreaView>
					<Button
						title="Close"
						onPress={() => setModalVisible(!modalVisible)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(!modalVisible);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</SafeAreaView>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGrey,
		borderRadius: 20,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
		width: "100%",
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;
