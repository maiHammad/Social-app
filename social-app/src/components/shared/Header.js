import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import socialAppLogo from "../../assets/images/socialAppLogo.jpg";
import Button from 'react-bootstrap/Button';
import AddPostModal from './AddPostModal';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
  return (
    <Navbar>
      <Container>
        <Link to="/" className="navbar-brand w-25">
            <img
              src={socialAppLogo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Link>
        <Nav className="justify-content-center w-50">
        <Nav.Item>
        Social App
         </Nav.Item>     
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end w-25">
        <Button variant="primary"  onClick={handleShow}>Add Post</Button>
        </Navbar.Collapse>

        {/*//add post modal*/}
       <AddPostModal show={show} setShow={setShow}/>
      </Container>
    </Navbar>
  );
}

export default Header;