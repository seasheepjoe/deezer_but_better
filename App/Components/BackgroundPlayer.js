import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "./Styles/BackgroundPlayerStyles";
import Video from "react-native-video";
import { BackgroundPlayerIcon } from "../Components";

class BackgroundPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		};
		this.resumeTrack = this.resumeTrack.bind(this);
		this.pauseTrack = this.pauseTrack.bind(this);
	}

	resumeTrack() {
		this.setState({ isPlaying: true });
	}

	pauseTrack() {
		this.setState({ isPlaying: false });
	}

	render() {
		return (
			<View style={Styles.container}>
				<BackgroundPlayerIcon name={"stepBackward"} />
				{this.state.isPlaying === true ?
					<BackgroundPlayerIcon name={"pause"} onPress={this.pauseTrack} />
					:
					<BackgroundPlayerIcon name={"play"} onPress={this.resumeTrack} />
				}
				<BackgroundPlayerIcon name={"stepForward"} />
				<Video
					audioOnly={true}
					paused={this.state.isPlaying === false}
					source={{ uri: "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-5.mp3" }}
					ref={(ref) => {
						this.player = ref
					}}
					onBuffer={this.onBuffer}
					onError={this.videoError}
					style={Styles.backgroundVideo} />
			</View>
		);
	}
}

export default BackgroundPlayer;