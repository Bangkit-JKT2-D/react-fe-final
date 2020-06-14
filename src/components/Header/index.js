import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  padding: 20px;
  background-color: lightgrey;
  position: fixed;
  top: 0;
  width: 100%;

  h2 {
    margin: 0;
    padding: 0;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h2>Bangkit.</h2>
    </HeaderStyle>
  );
};

export default Header;
