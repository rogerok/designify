import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  font-size: 1.2rem;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const MobileIcon = styled.button`
  display: none;
  z-index: 101;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 3rem;
  }
`;

export const NavLogo = styled(Link)`
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;
export const NavIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const NavMenu = styled.ul<{ open: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-left: auto;
  list-style-type: none;

  @media screen and (max-width: 968px) {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding-top: 30%;
    visibility: ${({ open }) => (open ? 1 : 0)};
    opacity: ${({ open }) => (open ? 1 : 0)};
    transform: translateY(${({ open }) => (open ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #41d0e1;
  }
`;

export const NavMenuItem = styled.li`
  cursor: pointer;
  @media screen and (max-width: 968px) {
    padding: 2rem;
  }
`;

export const NavbarLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 2px solid #ec421d;
  }

  @media screen and (max-width: 968px) {
    font-size: 2rem;
    &:hover {
      border-bottom: none;
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
