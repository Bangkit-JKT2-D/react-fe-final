import React from "react";
import { Container } from "./style";

const Modal = props => {
  const { show, children } = props;
  return (
    <Container style={{ display: `${show ? "flex" : "none"}` }}>
      <div className="modalcontainer">{children}</div>
    </Container>
  );
};

export default Modal;
