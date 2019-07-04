import React, { Component } from "react";
import { View, Text, SectionList, TouchableOpacity, ActivityIndicator } from "react-native";
import { History, I18n } from "../Lib";
import { AppStyles } from "../Themes";
import { SearchBar, TrackItem, Modal } from "../Components";
import Styles from "./Styles/SearchContainerStyles";
import Api from "../Api";
import FontAwesome, { Icons } from "react-native-fontawesome";
import ElevatedView from "react-native-elevated-view";
import _ from "lodash";

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			searchHistoryList: [],
			isLoading: true,
			searchResults: [],
		};
		this.input = null;
		this.modal = React.createRef();
		this.search = this.search.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.renderSectionHeader = this.renderSectionHeader.bind(this);
		this.renderSectionFooter = this.renderSectionFooter.bind(this);
		this.openModal = this.openModal.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
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
		console.log('Searching tracks');
		let { query } = this.state;
		this.setState({ isLoading: true });
		Api.search(query).then(response => {
			let results = [];
			for (var i in response) {
				let obj = response[i];
				results.push({
					title: I18n.t(`search_${i}_section_header_title`),
					data: obj,
					type: i,
				});
			}
			this.setState({ searchResults: results, isLoading: false });
		});
	}

	renderSectionHeader({ section }) {
		if (section.data.length <= 0) return null;
		return (
			<TouchableOpacity style={Styles.sectionHeader}>
				<Text style={Styles.sectionHeaderTitle}>{section.title}</Text>
				<FontAwesome style={Styles.sectionIcon}>{Icons.chevronRight}</FontAwesome>
			</TouchableOpacity>
		);
	}

	renderSectionFooter({ section }) {
		if (section.data.length <= 0) return null;
		return (
			<ElevatedView elevation={4} style={Styles.openModalButtonContainer}>
				<TouchableOpacity onPress={() => this.openModal(section)} style={Styles.openModalButton}>
					<Text style={Styles.openModalButtonText}>{I18n.t(`search_see_all_${section.type}`)}</Text>
				</TouchableOpacity>
			</ElevatedView>
		);
	}

	renderItem({ item, index }) {
		return (
			<TouchableOpacity onPress={() => this.search(item.text)} style={Styles.itemContainer} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
				<FontAwesome>{Icons.clock}</FontAwesome>
				<Text style={Styles.itemText}>{item.text}</Text>
			</TouchableOpacity>
		)
	}

	renderTrackItem({ item, index }) {
		return <TrackItem track={item} />
	}

	openModal(section) {
		this.modal.init({
			data: section.data,
			headerTitle: section.title,
			query: this.state.query,
		});
	}

	onChangeText(text) {
		if (text === "") return;
		const bounce = _.debounce(this.search, 1000);
		let query = text.split(" ").join("+");
		this.setState({ query });
		bounce();
	}

	render() {
		return (
			<View style={[AppStyles.container, Styles.container]}>
				<Modal setRef={ref => this.modal = ref} />
				<SearchBar
					setRef={ref => this.input = ref}
					onChangeText={this.onChangeText}
					onSubmitEditing={this.search}
				/>
				{this.state.query === "" &&
					<SectionList
						sections={this.state.searchHistoryList}
						renderSectionHeader={this.renderSectionHeader}
						renderItem={this.renderItem}
						style={Styles.sectionList}
						contentContainerStyle={Styles.sectionListContent}
						onLayout={() => this.setState({ isLoading: false })}
						keyExtractor={(item, index) => index.toString()}
					/>
				}
				{this.state.query !== "" &&
					<SectionList
						sections={this.state.searchResults}
						renderSectionHeader={this.renderSectionHeader}
						renderSectionFooter={this.renderSectionFooter}
						renderItem={this.renderTrackItem}
						style={Styles.sectionList}
						contentContainerStyle={Styles.sectionListContent}
						onLayout={() => this.setState({ isLoading: false })}
						keyExtractor={item => item.id}
					/>
				}
				{/* {this.state.isLoading === true && */}
				<View style={Styles.loadingScreen}>
					<ActivityIndicator size={"large"} />
				</View>
				{/* } */}
			</View>
		);
	}
}

export default SearchContainer;
