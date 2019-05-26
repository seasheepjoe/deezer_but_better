import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { History, I18n } from "../Lib";
import { AppStyles } from "../Themes";
import Styles from "./Styles/TrackItemStyles";
import FontAwesome, { Icons } from "react-native-fontawesome";

class TrackItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let { track } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePlayTrack} style={Styles.container}>
        <View style={Styles.trackCoverContainer}>
          <Image source={{ uri: track.album.cover_xl }} style={Styles.trackCover} resizeMode={"cover"} />
        </View>
        <View style={Styles.trackInfoContainer}>
          <Text numberOfLines={1} style={Styles.trackTitle}>{track.title}</Text>
          <Text numberOfLines={1} style={Styles.trackArtistName}>{`${I18n.t("track_item_by")} ${track.artist.name}`} - <Text style={Styles.trackAlbumName}>{track.album.title}</Text></Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default TrackItem;