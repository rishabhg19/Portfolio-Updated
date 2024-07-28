import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const FullScreenMenuContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
`;

const MenuItem = styled.a`
    color: white;
    font-size: 2rem;
    padding: 1rem;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #f1f1f1;
    }
`;

const FullScreenMenu = ({ isOpen, toggleMenu }) => {
    return (
        <FullScreenMenuContainer isOpen={isOpen}>
            <CloseIcon onClick={toggleMenu} />
            <MenuItem href="/" onClick={toggleMenu}>Home</MenuItem>
            <MenuItem href="/about" onClick={toggleMenu}>About</MenuItem>
            <MenuItem href="/portfolio" onClick={toggleMenu}>Portfolio</MenuItem>
            <MenuItem href="/experience" onClick={toggleMenu}>Experience</MenuItem>
            <MenuItem href="/contact" onClick={toggleMenu}>Contact</MenuItem>
        </FullScreenMenuContainer>
    );
};

export default FullScreenMenu;
