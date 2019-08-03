import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import Styles from "./Styles/TabBarIconStyles";
import { I18n } from "../Lib";

const defaultHitslop = { top: 20, bottom: 20, left: 20, right: 20 };

class TabBarIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isActive, onPress, customHitslop, iconName, routeName } = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[Styles.buttonContainer, isActive === true && Styles.buttonContainerActive]}
				hitSlop={customHitslop ? customHitslop : defaultHitslop}>
				<FontAwesome style={[Styles.buttonIcon, isActive === true && Styles.buttonIconActive]}>{Icons[iconName]}</FontAwesome>
				<Text style={[Styles.buttonText, isActive === true && Styles.buttonTextActive]}>{I18n.t(`bottom_nav_route_${routeName.toLowerCase()}`)}</Text>
			</TouchableOpacity>
		);
	}
}

export default TabBarIcon;
