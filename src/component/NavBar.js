import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


 const NavBar = () => {
  
  return (
    <>

<Navbar bg="primary" variant="dark">
        <Container>
        
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/app/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/app/kei-yen-game"}>Game</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>LogOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
}
export default NavBar
