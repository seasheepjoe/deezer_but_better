import React, { Component } from "react";
import { View, Text, SectionList, TouchableOpacity } from "react-native";
import { History } from "../Lib";
import { AppStyles } from "../Themes";
import { SearchBar } from "../Components";
import Styles from "./Styles/SearchContainerStyles";
import Api from "../Api";
import FontAwesome, { Icons } from "react-native-fontawesome";

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			searchHistoryList: [],
		};
		this.input = null;
		this.search = this.search.bind(this);
		this.renderItem = this.renderItem.bind(this);
	}

	componentDidMount() {
		this.setState({
			searchHistoryList: [
				{
					title: "Dernières recherches", data: [
						{ text: "lloyd price" },
						{ text: "pnb rock" },
						{ text: "Masterpiece" },
						{ text: "i'm gonna knock on your door" },
						{ text: "i'm gonna knock" },
					],
				},
				{
					title: "Les plus recherchés", data: [
						{ text: "jonas brothers" },
						{ text: "dj khaled" },
						{ text: "angèle" },
						{ text: "old town road" },
						{ text: "tabata mixtape, vol1. 1" },
					],
				},
				{
					title: "Les plus recherchés", data: [
						{ text: "jonas brothers" },
						{ text: "dj khaled" },
						{ text: "angèle" },
						{ text: "old town road" },
						{ text: "tabata mixtape, vol1. 1" },
					],
				},
				{
					title: "Les plus recherchés", data: [
						{ text: "jonas brothers" },
						{ text: "dj khaled" },
						{ text: "angèle" },
						{ text: "old town road" },
						{ text: "tabata mixtape, vol1. 1" },
					],
				},
			]
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

	search() {
		let { query } = this.state;
		Api.search(query).then(response => {
			console.log(response);
		});
	}

	renderSectionHeader({ section }) {
		return (
			<Text style={Styles.sectionHeaderTitle}>{section.title}</Text>
		)
	}

	renderItem({ item, index }) {
		return (
			<TouchableOpacity onPress={() => this.search(item.text)} style={Styles.itemContainer} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
				<FontAwesome>{Icons.clock}</FontAwesome>
				<Text style={Styles.itemText}>{item.text}</Text>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={[AppStyles.container, Styles.container]}>
				<SearchBar
					setRef={ref => this.input = ref}
					onChangeText={text => this.setState({ query: text.split(" ").join("+") })}
					onSubmitEditing={this.search}
				/>
				<SectionList
					sections={this.state.searchHistoryList}
					renderSectionHeader={this.renderSectionHeader}
					renderItem={this.renderItem}
					style={Styles.sectionList}
					contentContainerStyle={Styles.sectionListContent}
				/>
			</View>
		);
	}
}

export default SearchContainer;
