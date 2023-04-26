import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Cabecalho = (props) => {
  return (
    <>
      <title>Introdução ao React</title>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filmes/populares/">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamento/">
                Lançamento
              </NavDropdown.Item>
              <NavDropdown.Item href="/filmes/maisvotados/">Mais votados</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/emcartaz/">
                Em cartaz
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho