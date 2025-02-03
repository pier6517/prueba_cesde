import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">React App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cursos">Cursos</Nav.Link>
                        <Nav.Link href="/docentes">Docentes</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

