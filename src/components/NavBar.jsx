import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "shards-react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavBar = () => {
    const styles = {
        nav: {
          backgroundColor: 'black',
          color: '#fbdd11',
          minHeight: '4rem',
        },
        brand: {
          color: '#fbdd11',
          textDecoration: 'none'
        },
        links: {
          color: '#fbdd11',
          textDecoration: 'none',
          marginLeft: '.5rem',
          marginRight: '.5rem'
        },
        cartContainer: {
          margin: '.75rem'
        },
        /* collapse: {
          justifyContent: 'flex-end'
        } */
    }

    const [collapseIsOpen, setCollapseIsOpen] = useState(false)

    const toggleNavbar = () => {
      setCollapseIsOpen(!collapseIsOpen)
    }

    return (
      <Navbar type="dark" /* theme="primary" */ expand="md" className="d-flex justify-content-between" style={styles.nav}>
        <NavbarBrand tag="span">
          <Link to="/" style={styles.brand}>
            bananoCoin
          </Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} />

        <Collapse open={collapseIsOpen} navbar>
          <Nav navbar className="ml-auto align-items-center">
            <NavItem>
              <Link to="/faq" style={styles.links}>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" style={styles.links}>
                About
              </Link>
            </NavItem>  
            <NavItem>
              <Link to="/contact" style={styles.links}>
                Contact
              </Link>
            </NavItem>
            <NavItem style={styles.cartContainer}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </NavItem>            
          </Nav>
        </Collapse>

        {/* <Nav navbar className="ml-auto align-items-center justify-content-evenly">
          <NavItem>
            <Link to="/faq" style={styles.links}>
              FAQ
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" style={styles.links}>
              About
            </Link>
          </NavItem>  
          <NavItem>
            <Link to="/contact" style={styles.links}>
              Contact
            </Link>
          </NavItem>
          <NavItem style={styles.cartContainer}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </NavItem>            
        </Nav> */}
      </Navbar>
    )
}
