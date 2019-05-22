import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>HOME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabBar;
