import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
function Navbar1() {
  return (
    <div>
        <Navbar  bg="dark" variant="dark">
         <Container>
          <Navbar.Brand href="#home" className="font-weight-bold">
            <img
              src="https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />StarClinch
            
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="text-white">Hello, Manish</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default Navbar1