import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AppStyles } from "../Themes";
import Styles from "./Styles/TabBarStyles";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { I18n } from "../Lib";
import LinearGradient from "react-native-linear-gradient";

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <LinearGradient
          style={Styles.gradientView}
          start={{ x: 0.5, y: 0.0 }}
          end={{ x: 0.5, y: 1.0 }}
          colors={["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.05)"]}>
        </LinearGradient>
        {this.props.navigation.state.routes.map(item => (
          <TouchableOpacity
            key={item.key}
            onPress={() => this.props.navigation.navigate(item.key)}
            style={[Styles.buttonContainer, item.routeName === this.props.navigation.state.routes[this.props.navigation.state.index].routeName && Styles.buttonContainerActive]}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}>
            <FontAwesome style={Styles.buttonIcon}>{Icons[item.params.icon]}</FontAwesome>
            <Text style={Styles.buttonText}>{I18n.t(`bottom_nav_route_${item.routeName.toLowerCase()}`)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default TabBar;
