import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import Modal from "react-native-modal";
import Styles from "./Styles/ModalStyles";
import { Header, TrackItem } from "../Components";

class CustomModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			query: "Eminem",
			data: [],
			headerTitle: "",
		};
		this.init = this.init.bind(this);
	}

	init({ data, headerTitle, query }) {
		this.setState({
			isVisible: true,
			data,
			headerTitle,
			query,
		});
	}

	renderTrack({ item, index }) {
		return <TrackItem track={item} />
	}

	render() {
		const { setRef } = this.props;
		const { headerTitle, query, data } = this.state;
		return (
			<Modal
				style={Styles.container}
				hasBackdrop={false}
				useNativeDriver={true}
				isVisible={this.state.isVisible}
				ref={ref => {
					if (ref) ref.init = this.init;
					if (setRef) setRef(ref);
				}}>
				<Header onBackPress={() => this.setState({ isVisible: false })} title={headerTitle} subTitle={query} />
				<FlatList
					data={data}
					renderItem={this.renderTrack}
					style={Styles.tracksList}
					contentContainerStyle={Styles.tracksListContent}
					keyExtractor={(item, index) => index.toString()}
				/>
			</Modal>
		)
	}
}

export default CustomModal;
