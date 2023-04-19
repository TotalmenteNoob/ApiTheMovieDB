import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';

const Detalhes = ({ filme }) => {
    return (
        <Pagina titulo={filme.title}>
            <Container>
                <img src={'https://image.tmdb.org/t/p/w500' + filme.backdrop_path} className='mx-auto d-block' style={{ width: '75%' }} alt="" />
                <h6 className='m-1'>Descrição: {filme.overview}</h6>
            </Container>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id //o 'context.params é padrão do axios assim como o .data, já o id tem que ser o mesmo nome do arquivo'

    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data

    return {
        props: { filme }, // will be passed to the page component as props
    }
}