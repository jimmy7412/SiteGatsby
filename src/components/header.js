import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, NavbarBrand, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Nav } from 'reactstrap';

const Header = ({ siteTitle }) => {

  return (
    <Container>
      <header>
        <div>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light color="light">
            <Container>
              <NavbarBrand tag={Link} to="/">{siteTitle}</NavbarBrand>
              <Nav className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} to="/" nav>Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Blogs
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink tag={Link} to="/Weather">Weather</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/Politics">Politics</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink tag={Link} to="/Local">Local</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink tag={Link} to="/Resume">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/Projects">Projects</NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </header>
    </Container>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
