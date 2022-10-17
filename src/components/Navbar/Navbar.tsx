import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

import { navbarData } from "../../data/navbarData";

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavbarLink,
  NavMenu,
  NavMenuItem,
  MobileIcon,
} from "./NavbarStyles";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpen = () => setOpen(!open);

  const closeMobileMenu = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <NavIcon src="./images/logo.svg" alt="logo" />
          esignify
        </NavLogo>
        <MobileIcon type="button" onClick={handleOpen}>
          {open ? <FaTimes /> : <CgMenuRight />}
        </MobileIcon>
        <NavMenu open={open}>
          {navbarData.map((item) => (
            <NavMenuItem key={item.to}>
              <NavbarLink
                to={item.to}
                key={item.to}
                onClick={() => closeMobileMenu(item.to)}
              >
                {item.text}
              </NavbarLink>
            </NavMenuItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
