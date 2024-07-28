import React, { useState } from 'react';
import { Bars } from './Navbar/NavbarElements'; // Adjust the path as necessary
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px; /* Adjust this based on your navbar height */
    right: 0;
    width: 100%;
    background-color: #fff; /* Adjust the background color */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Bars onClick={toggleMenu} />
      <MenuContainer isOpen={isOpen}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/experience">Experience</MenuItem>
      </MenuContainer>
    </>
  );
};

export default Navbar;
