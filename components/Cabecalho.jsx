import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


const Cabecalho = (props) => {
  return (
    <>
      <title>Introdução ao React</title>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/filmes/">Populares</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho