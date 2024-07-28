import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo
} from "./NavbarElements";
import FullScreenMenu from '../FullScreenMenu'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
        <FullScreenMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <Nav>
            <NavLogo src="/assets/logo.png" alt="Website Logo" />
            <Bars onClick={toggleMenu} />

            <NavMenu className={isOpen ? "active" : ""}>
                <NavLink to="/home" onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>
                    About
                </NavLink>
                <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>
                    Portfolio
                </NavLink>
                <NavLink to="/experience" onClick={() => setIsOpen(false)}>
                    Experience
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
        </>

    );
};

export default Navbar;
