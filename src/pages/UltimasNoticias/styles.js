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

export const Noticias = styled.div`
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

  div {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 10px 20px;

    titulo {
      font-size: 14px;
      font-weight: bold;
      color: #694197;
    }

    chamada {
      font-size: 12px;
      padding: 2px 0 2px 0;
    }

    a {
      font-size: 10px;
    }
  }
`;
