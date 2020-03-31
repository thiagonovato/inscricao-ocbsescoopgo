import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0 0 0;
`;

export const Content = styled.div`
  height: 180;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    padding-bottom: 20px;
    img {
      height: 70px;
    }
  }

  span {
    padding-bottom: 20px;
    img {
      height: 50px;
    }
  }

  aside {
    img {
      height: 200px;
    }
  }
`;

export const Menu = styled.div`
  height: 180;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  div {
    padding: 2px;
    a {
      font-weight: bold;
      color: #fff;
      background: #694197;
      max-width: 200px;
      width: 100%;
      height: 50px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      padding: 30px;
    }
  }
`;
