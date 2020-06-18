import React from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Loading = props => {
  const { text } = props;
  return (
    <Container>
      <HashLoader size={80} color="black" loading />
      {text ? <h3>{text}</h3> : <h3>Loading...</h3>}
    </Container>
  );
};

export default Loading;
