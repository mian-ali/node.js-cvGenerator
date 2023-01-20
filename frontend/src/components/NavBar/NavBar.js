import { Navbar, NavbarBrand, Nav, NavItem } from 'react-bootstrap';
import GitHubButton from 'react-github-btn';

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/" className="font-weight-bold">
            CV Generator App
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
