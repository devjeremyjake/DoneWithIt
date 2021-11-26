import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Screen from "./components/Screen";
import * as ImagePicker from "expo-image-picker";
import ListingEditScreen from "./screens/ListingEditScreen";
import { Button, Image } from "react-native";
import ImageInputList from "./components/ImageInputList";

export default function App() {
	const [imageUris, setImageUris] = useState([]);

	const handleAdd = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};

	return (
		<Screen>
			{/* <ListingEditScreen /> */}
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</Screen>
	);
}
