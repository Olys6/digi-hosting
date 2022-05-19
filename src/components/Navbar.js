import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

  const navbarItems = ['Web Hosting', 'Find a Domain', 'VPS', 'SSL Certificates']

  return (
    <Navbar style={{ backgroundColor: 'white', borderBottom: "2px solid #080494" }} expand="lg" variant="light">
      <Container>
        <Navbar.Brand style={{ marginLeft: "0px" }} href="/"><img style={{ width: "280px" }} src="./assets/Digi-SwissLogo.png" alt="digi host logo" ></img></Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3" >
          <Nav.Link style={{ color: "#080494", fontWeight: "bold" }} href='/'>Home</Nav.Link>
          <>
            {navbarItems.map((item) => (
              <Nav.Link key={item} href={"/" + item.split(" ").join("-").toLowerCase()} style={{ color: "#080494", fontWeight: "bold" }}>{item}</Nav.Link>
            ))}
          </>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#web-hosting">Web Hosting</Nav.Link>
          <Nav.Link href="#domain-search">Find a Domain</Nav.Link>
          <Nav.Link href="#vps">VPS</Nav.Link>
          <Nav.Link href="#ssl-certificates">SSL Certificates</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
