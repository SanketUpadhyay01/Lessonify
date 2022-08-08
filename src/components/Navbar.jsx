import React from "react";
import {Navbar,Nav} from 'react-bootstrap'
import {Container}from 'react-bootstrap'
import {Link} from "react-router-dom"


const NavBar = ()=>{
  return (
  
    <Navbar className="w-100" bg="primary" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="container-fluid">
        <Link  className="navbar-brand" to="/" >
           <img src="images/newLogo.png" alt="Logo" className="img-fluid" style={{'maxWdth': '80%','maxHeight':'90%'}}/>
        </Link>
          <Nav.Link as={Link} to ={"/home"} >Home</Nav.Link>
          <Nav.Link as={Link} to ={"/screening"}>Screening</Nav.Link>
          <Nav.Item className="ms-auto">
              <Nav.Link as={Link} to ={"/signup"}>Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
 
);
}
 
export default NavBar