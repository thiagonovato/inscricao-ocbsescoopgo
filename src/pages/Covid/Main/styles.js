import styled from "styled-components";
import px2vw from "../../utils/px2x";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  justify-content: space-between;
  max-width: 1200px;
  margin: 50px auto;

  div {
    max-width: 748px;
  }
`;
