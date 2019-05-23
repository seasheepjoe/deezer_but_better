import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppStyles } from '../Themes';
import Styles from './Styles/TabBarStyles';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.navigation);
    return (
      <View style={Styles.container}>
        {this.props.navigation.state.routes.map(item => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate(item.key)} style={Styles.buttonContainer} hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}>
            <FontAwesome style={Styles.buttonIcon}>{Icons[item.params.icon]}</FontAwesome>
            <Text>{item.routeName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default TabBar;
