import styled from "styled-components";

export const Container = styled.div``;

export const Titulo = styled.div`
  padding: 0 30px 30px 30px;
  text-align: center;

  div {
    font-size: 40px;
    padding: 0 0 20px;
    color: #694197;
    font-weight: bold;
  }

  span {
    font-size: 16px;
  }
`;

export const Noticia = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px 30px 50px;

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
