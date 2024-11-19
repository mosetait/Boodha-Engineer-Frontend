import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

        <Link to={"/"}>
          <img src="/logo.jpeg" width={100} alt="" />
          <Navbar.Brand>Boodha Engineer </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Home" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>

              <NavDropdown.Item href="#action4">Management Design</NavDropdown.Item>

              <NavDropdown.Item href="#action5">Policy</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Categories" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">Product Sell</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Product Service</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Spare Sell</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Services" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">Inverter Service</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Out of Warranty</NavDropdown.Item>
              <NavDropdown.Item href="#action3">AMC</NavDropdown.Item>
              <NavDropdown.Item href="#action3">ISC</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Dismentelling and Re-Installation</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Carrier" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">JOB</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Technical</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Non-Technical</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Login" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">ASP</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Customer</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Dealerr</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Stockist</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sales</NavDropdown.Item>

            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Header;