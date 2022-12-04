import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar =() => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="add">Add Product</Nav.Link>
            <Nav.Link to="update">Update Product</Nav.Link>
            <Nav.Link to="Profile">Profile</Nav.Link>
            <Nav.Link to="logout">Logout</Nav.Link>
            <Nav.Link to="signup">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;