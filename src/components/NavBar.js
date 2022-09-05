import React from 'react';
import tempusLogo from '../media/TEMPUS.jpg';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 20px;
`;

const NavItem = styled.a`
  display: inline-block;
  padding: 10px 10px 0 10px;
  text-decoration: none;
  color: darkslategray;
  
  &:hover {
    color: slategray;
  }
`;

const NavBar = () => {
  return (
    <header>
      <Nav>
        <img
          alt='tempus logo'
          src={tempusLogo}
          style={{
            height: 40,
            marginRight: 20,
          }}
        />
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/4ups'>4-Ups</NavItem>
        <NavItem href='/agendas'>Meeting Agendas</NavItem>
        <NavItem href='/time-tracking'>Time Tracking</NavItem>
      </Nav>
    </header>
  );
};

export default NavBar;