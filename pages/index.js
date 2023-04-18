import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../components/Cabecalho';
import styles from '../styles/Home.module.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina titulo = "TheMovieDB">
        <Container>
            
        </Container>
      </Pagina>
    </>
  )
}
