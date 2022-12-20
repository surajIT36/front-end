import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const styleNavLink = {
  textDecoration: 'none',
  color: '#c8cbcf',
  
}

const NavBar =() => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#"><Link style={styleNavLink}  to="/">Home</Link></Nav.Link>
            <Nav.Link to="#"><Link style={styleNavLink}  to="/add">Add Product</Link></Nav.Link>
            <Nav.Link to="#"><Link style={styleNavLink}  to="/update"> Update Product</Link></Nav.Link>
            <Nav.Link to="#"><Link style={styleNavLink}  to="/Profile">Profile</Link></Nav.Link>
            <Nav.Link to="#"><Link style={styleNavLink}  to="/logout">Logout</Link></Nav.Link>
            <Nav.Link to="#"><Link style={styleNavLink} to="/signup">SignUp</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


