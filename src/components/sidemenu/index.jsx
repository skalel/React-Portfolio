import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineCode,
  AiOutlineFolder,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineLinkedin,
  AiOutlineUser,
} from "react-icons/ai";

import { IoLogoReact } from "react-icons/io5";

import FocusLock from "react-focus-lock";
import { IconContext } from "react-icons/lib";
import Burger from "../retractSide/burger";

import { Style, NavItem, TextNav } from "./sidemenu.styles";

export function Sidemenu() {
  // handle the animation and effects from expanding the sidebar
  const [openMenu, setOpenMenu] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  // handle the exihibition of the pages descriptions
  const [display, setDisplay] = useState(false);
  const [padding, setPadding] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
    setPadding(!padding);
  };

  const RotateConst = useMemo(
    () => ({ className: "ReactSymbol", color: "#61DBFB", size: "50" }),
    [],
  );

  let iconSize;

  if (display) {
    if (window.innerWidth > 810) {
      iconSize = 30;
    }
    if (window.innerWidth <= 810) {
      iconSize = 50;
    }
  } else {
    iconSize = 50;
  }

  return (
    <Style sidemenu={display}>
      <div className="burgerMenu" ref={node} onClick={handleClick} aria-hidden>
        <FocusLock disabled={!openMenu} className="buttonHolder">
          <Burger
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            aria-controls={menuId}
          />
        </FocusLock>
      </div>
      <div id="nav-logo">
        <a href="https://github.com/skalel">
          <img
            src="https://avatars.githubusercontent.com/u/54180849"
            alt="Github Avatar"
            style={{ width: openMenu ? "50%" : "85%" }}
          />
        </a>
      </div>
      <div id="nav-buttons">
        <ul>
          <NavItem padding={padding}>
            <Link to="/">
              <AiOutlineHome size={iconSize} />
              <TextNav display={display}> Início</TextNav>
            </Link>
          </NavItem>
          <NavItem padding={padding}>
            <Link to="/about-me">
              <AiOutlineUser size={iconSize} />
              <TextNav display={display}> Sobre</TextNav>
            </Link>
          </NavItem>
          <NavItem padding={padding}>
            <Link to="/development">
              <AiOutlineCode size={iconSize} />
              <TextNav display={display}> Desenvolvimento</TextNav>
            </Link>
          </NavItem>
          <NavItem padding={padding}>
            <Link to="/projects">
              <AiOutlineFolder size={iconSize} />
              <TextNav display={display}> Projetos</TextNav>
            </Link>
          </NavItem>
          <NavItem padding={padding}>
            <a
              href="https://github.com/skalel"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub size={iconSize} />
              <TextNav display={display}> GitHub</TextNav>
            </a>
          </NavItem>
          <NavItem padding={padding}>
            <a
              href="https://www.linkedin.com/in/sandro-srj/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin size={iconSize} />
              <TextNav display={display}> LinkedIn</TextNav>
            </a>
          </NavItem>
        </ul>
      </div>
      <div id="nav-framework">
        <IconContext.Provider value={RotateConst}>
          <IoLogoReact size={20} />
        </IconContext.Provider>{" "}
        <TextNav>Made using React.</TextNav>
      </div>
    </Style>
  );
}

export default Sidemenu;
