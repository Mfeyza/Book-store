import React from 'react'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navimg from "../img/book_library_education_books_office_documents_archive.png"
import {NavLink} from "react-router-dom"
import {faCartShopping}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarBook = () => {
  return (
    <div className='navbarcontainer w-100'>
  <Navbar expand="lg" className="navbar ">
<Container fluid className='d-flex gap-5'>
<Navbar.Brand href="#home">
          <img src={navimg} width="50rem" />
          MFY SAHAF
        </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0 gap-4"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <NavLink className="nav-link" to="/">Anasayfa</NavLink>
   
      <NavDropdown title="Ürünlerimiz" id="navbarScrollingDropdown">
              <NavLink className="nav-link" to="/Kirtasiye">Kırtasiye</NavLink>
              <NavDropdown.Divider />
              <NavLink className="nav-link" to="/ElektronikP">Elektronik</NavLink>
            </NavDropdown>
            <NavLink to="/Hakkimizda" className="nav-link">Hakkımızda</NavLink>
            <NavLink to="/Mock" className="nav-link">Ürününü Oluştur</NavLink>
        <NavLink to="/Login" className="nav-link">Giriş</NavLink>
        <NavLink className="nav-link ms-5" to="/"> <q> <i>Kitaplar insanların kaderlerini değiştirir.</i></q></NavLink>
        <NavLink to="/Payy" className="nav-link">
      <button type="button" class="btn  position-relative ms-5">
     <FontAwesomeIcon icon={faCartShopping}style={{color: "#3e3d41ca",fontSize:"20px"}} />
  
</button>
      </NavLink>
    </Nav>
   
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
  )

 
  
}

export default NavbarBook

