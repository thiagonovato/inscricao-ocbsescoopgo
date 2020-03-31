import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  display: flex;
  justify-content: space-between;

  div {
    max-width: 600px;
  }
`;

export const Acoes = styled.div`
  border: 1px solid;
  border-color: #9797a6;
  border-radius: 4px;
  width: 800px;

  span {
    font-size: 25px;
    display: flex;
    padding: 10px 50px 10px 10px;
    background: #694197;
    color: #fff;
  }
`;

export const Acao = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 30px 50px;

  img {
    height: 150px;
    border-radius: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 15px;

    titulo {
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    chamada {
      font-size: 16px;
    }

    a {
      padding-top: 20px;
    }
  }
`;
