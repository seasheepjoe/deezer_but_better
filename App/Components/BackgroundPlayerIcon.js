import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import Styles from "./Styles/BackgroundPlayerIconStyles";

class BackgroundPlayerIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, size, onPress } = this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<FontAwesome style={[Styles.icon, size ? { fontSize: size } : null]}>{Icons[name]}</FontAwesome>
			</TouchableOpacity>
		);
	}
}

export default BackgroundPlayerIcon;
