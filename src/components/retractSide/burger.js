import React from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

const StyledBurger = styled.button`
  @media screen and (min-width: 811px) {
    position: absolute;
    margin: 0 auto;
    top: ${({ openMenu }) => (openMenu ? "4%" : "1%")};
    right: ${({ openMenu }) => (openMenu ? "10%" : "25%")};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.8rem;
    height: 1.8rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 810px) {
    position: absolute;
    margin: 0 auto;
    top: 2%;
    right: 8%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 2.25rem;
    height: 2.25rem;
    background: transparent;
    border: none;
    padding: 2px;
    z-index: 10;

    border: 1px solid #808080;
    border-radius: 4px;

    transition: 0.5s all ease-in-out;
  }
  span {
    width: 1.9rem;
    height: 0.25rem;
    background: var(--detailsColorPrimary);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    right: ${({ openMenu }) => (openMenu ? "-13%" : "0px")};
    transform-origin: 1px;
    :first-child {
      transform: ${({ openMenu }) =>
        openMenu ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
      transform: ${({ openMenu }) =>
        openMenu ? "translateX(20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ openMenu }) =>
        openMenu ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

function Burger({ openMenu, setOpenMenu, ...props }) {
  const isExpanded = !!openMenu;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      openMenu={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

Burger.propTypes = {
  openMenu: bool.isRequired,
  setOpenMenu: func.isRequired,
};

export default Burger;
