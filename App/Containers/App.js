/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import RouteStack from "../Navigation";
import { BackgroundPlayer } from "../Components";

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<RouteStack screenProps={{}} />
			</SafeAreaView>
		);
	}
}
