import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { History } from '../Lib';

class SearchContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		History.getHistory().then(response => {

		});
	}

	render() {
		return (
			<View>
				<Text>SEARCH CONTAINER</Text>
			</View>
		);
	}
}

export default SearchContainer;
