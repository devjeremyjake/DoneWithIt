import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";
import colors from "../../config/colors";

function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
	showChevrons,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText numberOfLines={2} style={styles.title}>
							{title}
						</AppText>
						{subTitle && (
							<AppText numberOfLines={5} style={styles.subTitle}>
								{subTitle}
							</AppText>
						)}
					</View>
					{showChevrons && (
						<View style={styles.arrowRight}>
							<Entypo name="chevron-right" size={24} color="black" />
						</View>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
		alignItems: "center",
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex: 1,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "500",
	},
	arrowRight: {
		color: colors.medium,
	},
});

export default ListItem;
