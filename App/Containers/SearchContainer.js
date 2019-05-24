import React, { Component } from "react";
import { View, Text, Keyboard } from "react-native";
import { History } from "../Lib";
import { AppStyles } from "../Themes";
import { SearchBar } from "../Components";
import Styles from "./Styles/SearchContainerStyles";

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.input = null;
	}

	componentDidMount() {
		this.focusListener = this.props.navigation.addListener("didFocus", () => {
			if (this.input !== null && this.input !== undefined) {
				this.input.focus();
			}
		});
	}

	componentWillUnmount() {
		this.focusListener.remove();
	}

	render() {
		return (
			<View style={[AppStyles.container, Styles.container]}>
				<SearchBar setRef={ref => this.input = ref} />
			</View>
		);
	}
}

export default SearchContainer;