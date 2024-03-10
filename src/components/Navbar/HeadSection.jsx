import React, { useState } from 'react'
import './Head.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const HeadSection = () => {

    const[menu,setMenu] = useState("home")

  return (
    <Navbar expand="lg"   className="nav">
    <Container fluid>
      <Navbar.Brand className="nav_logo" href="#"><img src={logo} alt="" /><p>FASHION</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className=" head_menu">
          <Nav.Link  onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>} </Nav.Link>
          <Nav.Link onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none',color:'black'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</Nav.Link>
          <Nav.Link onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'black'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</Nav.Link>
          <Nav.Link onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'black'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</Nav.Link>
          <div className=" nav_signin">
          <Link to='/login'><Button>login</Button></Link>
          <Link to='/kart'><img src={cart_icon} alt="" /></Link>
            <div className="nav_cart_count">0</div>

          </div>
          
        </Nav>
        
           
       
         
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  )
}

export default HeadSection
