import React, { Component, useState } from 'react';
import ButtonDropdown, { Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'gatsby';
import './NavMenu.css';
import DropdownToggle from "reactstrap"
import DropdownMenu from "reactstrap"
import DropdownItem from "reactstrap"

const NavMenu = (props) => {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">James Pierce</NavbarBrand>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        Button Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Resume">Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Projects">Projects</NavLink>
                                </NavItem>
                            </ul>
                    </Container>
                </Navbar>
            </header>
        )
}

export default NavMenu