import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 20px;

  .dropZone {
    min-height: 300px;
    width: 70%;
    border: 1px dotted black;
    border-radius: 5px;
    text-align: center;
    margin: 10px;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .remove {
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
  }
`;
