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
			query: "",
		};
		this.input = null;
		this.search = this.search.bind(this);
	}

	search() {
		let { query } = this.state;
		Api.search(query).then(response => {
			console.log(response);
		});
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
				<SearchBar
					setRef={ref => this.input = ref}
					onChangeText={text => this.setState({ query: text.split(" ").join("+") })}
					onSubmitEditing={this.search}
				/>
			</View>
		);
	}
}

export default SearchContainer;
