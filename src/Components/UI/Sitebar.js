import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink }
from 'reactstrap';

const Sitebar = () => {
    const [toggle, setToggle ] = useState(false);


    const navToggle = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Farok eyada </NavbarBrand>
        <NavbarToggler onClick={navToggle} />
        <Collapse isOpen={toggle} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="*">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
};

export default Sitebar;