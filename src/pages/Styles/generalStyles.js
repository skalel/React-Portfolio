import styled from "styled-components";
import { shade, lighten } from "polished";

const Conteiner = styled.div`
  margin: 20px;

  & > a {
    transition: 0.2s color ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${shade(0.3, "#c5ff6a")};
    }
  }
  .contentBox > div {
    background-color: ${lighten(0.05, "#373333")};

    & > h4 {
      color: var(--detailsColorPrimary);
    }
  }
  @media screen and (min-width: 811px) {
    width: calc(${window.innerWidth}px - 70px);

    .contentBox {
      width: 100%;
      display: flex;
    }
  }
  @media screen and (max-width: 810px) {
    .contentBox {
      width: 100%;
      display: flex;

      flex-direction: column;
    }
  }
`;

export default Conteiner;
