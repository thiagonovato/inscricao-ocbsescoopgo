import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  font-size: 25px;

  span {
    display: flex;
    padding: 10px 50px 10px 10px;
    background: #694197;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid;
    border-color: #9797a6;
    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;
      padding: 5px 10px 0 10px;
      font-size: 16px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
      height: 80px;
    }

    button {
      height: 44px;
      width: 200px;
      background: #694197;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#694197")};
      }
    }
  }
`;

export const Botao = styled.div`
  margin: 0px auto 10px;
`;
