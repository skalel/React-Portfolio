import styled, { keyframes } from "styled-components";

const Appear = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const Style = styled.div`
  @keyframes RotateReact {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 811px) {
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--menuColor);
    box-shadow: 5px 0px 6px 8px #282525;
    transition: 0.5s width ease-in-out;

    width: ${props => (props.sidemenu ? "300px" : "70px")};

    a {
      text-decoration: none;
    }
    .burgerMenu {
      margin-top: 8px;
    }

    & > div {
      padding: 8px 8px;
    }

    #nav-logo {
      display: flex;
      justify-content: center;
      align-items: center;

      & > a {
        margin-top: 32px;
      }

      & > a {
        & > img {
          border-radius: 50%;
          display: block;
          margin: 0 auto;
          transition: 0.5s all ease-in-out;
        }
      }
    }
    #nav-framework {
      text-align: center;
      .ReactSymbol {
        animation: RotateReact 16s linear infinite;
        vertical-align: middle;
      }
      & > p {
        display: ${props => (props.sidemenu ? "inline" : "none")};
      }
    }
    .buttonHolder {
      position: relative;
    }
  }
  @media screen and (max-width: 810px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  @media screen and (min-width: 811px) {
    list-style-type: none;
    margin: auto 0;
    border: 1px solid #808080;
    border-radius: 15px;
    background-color: var(--menuColor);
    transition: 0.5s all ease-in-out;
    padding: ${props => (props.padding ? "4px 8px" : 0)};

    & + li {
      margin-top: 4px;
    }
    & > a {
      display: flexbox;
      width: 100%;
      height: 100%;
      align-items: center;
    }
    & > a > svg {
      transition: 0.5s all ease-in-out;
      margin-bottom: -5px;
    }
    &:hover {
      background-color: var(--detailsColorPrimary);
      & > a > svg,
      & > a > p {
        color: var(--menuColor);
      }
    }
  }
`;

export const TextNav = styled.p`
  @media screen and (min-width: 811px) {
    animation: ${Appear} 0.8s ease-in-out;
    display: ${props => (props.display ? "inherit" : "none")};
    margin-left: 8px;
  }
`;
