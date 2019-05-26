import React, { Component } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import Styles from "./Styles/ModalStyles";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      query: "Eminem"
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

  render() {
    let { setRef } = this.props;
    return (
      <Modal
        style={Styles.container}
        hasBackdrop={false}
        isVisible={this.state.isVisible}
        ref={ref => {
          if (ref) ref.init = this.init;
          if (setRef) setRef(ref);
        }}>
        <Text>{this.state.query}</Text>
      </Modal>
    )
  }
}

export default CustomModal;
