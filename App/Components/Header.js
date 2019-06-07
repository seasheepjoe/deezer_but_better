import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Styles from "./Styles/HeaderStyles";
import FontAwesome, { Icons } from "react-native-fontawesome";

class Header extends Component {
  render() {
    const { onBackPress, title, subTitle } = this.props;
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={onBackPress} style={Styles.backButton} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <FontAwesome style={Styles.backIcon}>{Icons.arrowLeft}</FontAwesome>
        </TouchableOpacity>
        <View style={Styles.headerInfo}>
          <Text style={Styles.headerTitle}>{title}</Text>
          <Text style={Styles.headerSubTitle}>{`" ${subTitle} "`}</Text>
        </View>
      </View>
    )
  }
}

export default Header;
