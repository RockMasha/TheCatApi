import { Component } from "react";
import { ModalStyled, Wrapper } from "./Modal.styled";

class Modal extends Component {
  render() {
    const { hiddenModal, children } = this.props;
    return (
      <Wrapper onClick={hiddenModal}>
        <ModalStyled className="modal">{children}</ModalStyled>
      </Wrapper>
    );
  }
}

export default Modal;
