import React, { Component } from "react";
import { View } from "react-native";
import Styles from "./Styles/TabBarStyles";
import { TabBarIcon } from ".";

class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={Styles.container}>
				{this.props.navigation.state.routes.map(item => (
					<TabBarIcon
						key={item.routeName}
						isActive={item.routeName === this.props.navigation.state.routes[this.props.navigation.state.index].routeName}
						routeName={item.routeName}
						iconName={item.params.icon}
						onPress={() => this.props.navigation.navigate(item.key)} />
				))}
			</View>
		);
	}
}

export default TabBar;
