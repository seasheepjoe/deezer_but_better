import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import Styles from "./Styles/SearchBarStyles";
import { I18n } from "../Lib";

type Props = {
  setRef: Function,
  onChangeText: Function,
};
class SearchBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    const { setRef, onChangeText } = this.props;
    return (
      <View style={Styles.container}>
        <TextInput
          ref={ref => {
            this.input = ref;
            if (setRef) setRef(ref);
          }}
          style={Styles.textInput}
          onChangeText={text => {
            this.setState({ text });
            if (onChangeText) onChangeText(text);
          }}
          underlineColorAndroid={"transparent"}
          autoFocus={true}
          placeholder={I18n.t("search_bar_input_placeholder")}
          placeholderTextColor={"#000"}
        />
      </View>
    )
  }
}

export default SearchBar;