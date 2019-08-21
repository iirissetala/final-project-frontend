import React, { Component } from "react";
const ModaloContext = React.createContext();

class ModaloProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  openModal = () => {
    this.setState({
      modalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    return (
      <ModaloContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ModaloContext.Provider>
    );
  }
}

export const ModalConsumer = ModaloContext.Consumer;
export const ModalProvider = ModaloProvider;
