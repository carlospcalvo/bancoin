import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  Nav,
} from "shards-react";

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
        cartContainer: {
          margin: '.75rem'
        }
    }

    return (
      <Navbar type="dark" /* theme="primary" */ expand="md" className="d-flex justify-content-between" style={styles.nav}>
        <NavbarBrand href="/" style={styles.brand}>!banCoin</NavbarBrand>
        <Nav navbar className="ml-auto">
            <div style={styles.cartContainer}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </div>            
        </Nav>
      </Navbar>
    )
}
