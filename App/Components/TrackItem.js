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

  getTrackTitle(track) {
    return track.title ? track.title : track.name;
  }

  getSubTitle(track) {
    let subTitle = "";
    if (track.type === "track") {
      subTitle = `${I18n.t("track_item_by")} ${track.artist.name} - ${track.album.title}`;
    } else if (track.type === "artist") {
      subTitle = `${track.nb_fan} ${I18n.t("track_item_nb_fans")}`;
    } else if (track.type === "album") {
      subTitle = track.artist.name;
    } else if (track.type === "playlist") {
      subTitle = `${I18n.t("track_item_by")} ${track.user.name}`;
    } else if (track.type === "podcast") {
      subTitle = track.description;
    } else if (track.type === "user") {
      subTitle = track.name;
    } else {
      subTitle = "";
    }
    return subTitle;
  }

  render() {
    let { track } = this.props;
    let title = this.getTrackTitle(track);
    let subTitle = this.getSubTitle(track);
    return (
      <TouchableOpacity onPress={this.handlePlayTrack} style={Styles.container}>
        <View style={Styles.trackCoverContainer}>
          <Image source={{ uri: track.album && track.album.cover_xl || track.picture_xl && track.picture_xl || track.cover_xl && track.cover_xl }} style={Styles.trackCover} resizeMode={"cover"} />
        </View>
        <View style={Styles.trackInfoContainer}>
          <Text numberOfLines={1} style={Styles.trackTitle}>{title}</Text>
          <Text numberOfLines={1} style={Styles.trackArtistName}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default TrackItem;