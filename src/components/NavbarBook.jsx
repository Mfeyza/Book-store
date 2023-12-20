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
      <Navbar className='navbar d-flex gap-5 w-100'>
        <div className='ms-5'>
        <Navbar.Brand href="#home">
          <img src={navimg} width="50rem" />
          MFY SAHAF
        </Navbar.Brand>
      
        </div>
   
   
   
      <div>
      <Nav className="me-auto d-flex gap-5 ">
        <NavLink className="nav-link" to="/">Anasayfa</NavLink>
        <NavDropdown title="Ürünlerimiz" id="navbarScrollingDropdown">
              <NavLink className="nav-link" to="/Kirtasiye">Kırtasiye</NavLink>
              <NavDropdown.Divider />
              <NavLink className="nav-link" to="/ElektronikP">Elektronik</NavLink>
            </NavDropdown>
       
       
        <NavLink to="#features" className="nav-link">Hakkımızda</NavLink>
        <NavLink to="/Login" className="nav-link">Giriş</NavLink>
      </Nav>
      
      </div>
      <div>
        <q> <i>Kitaplar insanların kaderlerini değiştirir.</i></q>
      </div>
      <NavLink to="/Payy" className="nav-link">
      <button type="button" class="btn  position-relative">
     <FontAwesomeIcon icon={faCartShopping}style={{color: "#3e3d41ca",fontSize:"20px"}} />
  
</button>
      </NavLink>
     
     
      
    
  </Navbar>
</div>
  )

 
  
}

export default NavbarBook