import React, { Component } from "react";
import { View, Text, Keyboard } from "react-native";
import { History } from "../Lib";
import { AppStyles } from "../Themes";
import { SearchBar } from "../Components";
import Styles from "./Styles/SearchContainerStyles";
import Api from "../Api";

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.input = null;
	}

	componentDidMount() {
		Api.getTrack(302127).then(response => {
			console.log(response);
		});
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
