import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Styles from "./Styles/SearchBarStyles";
import { I18n } from "../Lib";
import FontAwesome, { Icons } from "react-native-fontawesome";

type Props = {
  setRef: Function,
  onChangeText: Function,
  onSubmitEditing: Function,
};
class SearchBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.clearSearchBar = this.clearSearchBar.bind(this);
  }

  clearSearchBar() {
    if (this.props.onChangeText) {
      this.props.onChangeText("");
    }
    this.input.clear();
    this.setState({ text: "" });
  }

  render() {
    const { setRef, onChangeText, onSubmitEditing, value } = this.props;
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.textInput}
          ref={ref => {
            this.input = ref;
            if (setRef) setRef(ref);
          }}
          onChangeText={text => {
            this.setState({ text });
            if (onChangeText) onChangeText(text);
          }}
          underlineColorAndroid={"transparent"}
          autoFocus={true}
          autoCapitalize={"words"}
          autoCorrect={false}
          placeholder={I18n.t("search_bar_input_placeholder")}
          placeholderTextColor={"lightgrey"}
          returnKeyType={"search"}
          onSubmitEditing={() => {
            if (onSubmitEditing) onSubmitEditing();
          }}
          multiline={false}
          numberOfLines={1}
        />
        {(this.state.text !== "" || (value !== undefined && value !== "")) &&
          <TouchableOpacity onPress={this.clearSearchBar} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <FontAwesome style={Styles.clearIcon}>{Icons.times}</FontAwesome>
          </TouchableOpacity>
        }
        <View style={Styles.hairlineBorderView} />
      </View>
    )
  }
}

export default SearchBar;