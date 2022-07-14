import styled from "styled-components";

export const Style = styled.div`
  @media screen and (min-width: 811px) {
    display: none;
  }
  @media screen and (max-width: 810px) {
    width: 100%;
    transition: 0.5s all ease-in-out;

    margin-top: ${props => (props.sidemenu ? "0px" : "-450px")};

    #nav-logo,
    #nav-framework {
      display: none;
    }
    #nav-buttons {
      background-color: var(--menuColor);
      padding: 16px 0;
      margin-bottom: 4%;

      transition: 0.5s all ease-in-out;

      box-shadow: ${props =>
        props.sidemenu ? "0px 5px 6px 8px #282525" : "0"};
    }
  }
`;

export const NavItem = styled.li`
  @media screen and (max-width: 810px) {
    width: 96%;
    padding: 4px 12px;
    list-style-type: none;
    margin: 0 auto;
    border: 1px solid #808080;
    border-radius: 15px;
    background-color: var(--menuColor);
    transition: 0.5s all ease-in-out;

    & + li {
      margin-top: 8px;
    }
    & > a {
      display: flex;
      width: 100%;
      height: 100%;
      text-decoration: none;
      justify-content: center;
      align-items: center;
    }
    & > a > svg + p {
      margin: 8px;
    }
    & > a > p {
      font-size: 1.2rem;
    }
  }
`;

export const TextNav = styled.p`
  @media screen and (max-width: 810px) {
    display: inline;
  }
`;
