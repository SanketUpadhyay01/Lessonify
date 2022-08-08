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
          <a href ={"/home"} >Home</a>
          <a href={"/screening"}>Screening</a>
          <Nav.Item className="ms-auto">
              <a href ={"/signup"}>Sign Up</a>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
 
);
}
 
export default NavBar