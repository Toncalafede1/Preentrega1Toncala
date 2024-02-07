// NavBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './cartwidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Nombre de la Tienda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Agrega tus categorías clikeables aquí */}
                        <Nav.Link href="#category1">Categoría 1</Nav.Link>
                        <Nav.Link href="#category2">Categoría 2</Nav.Link>
                        {/* Agrega más categorías según sea necesario */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

