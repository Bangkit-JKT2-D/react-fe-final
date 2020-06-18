import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    background-color: #8b8b8b98;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .modalcontainer {
    margin: 30px;
    background-color: white;
    width: 360px;
    border: none;
    border-radius: 10px;
    padding: 20px 10px;
    position: relative;
    .closebutton {
        border: none;
        background: transparent;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        position: absolute
        right: 5px;
    }
    }
`;
