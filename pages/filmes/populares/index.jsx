import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../../../components/Pagina';
import apiFilmes from '../../../services/apiFilmes';
import Link from 'next/link';

const index = ({filmes}) => {

    return (
        <Pagina titulo="Filmes populares">
            <Container className='d-flex flex-row flex-wrap justify-content-center'>
                {filmes.map(item => (
                    <div className='m-1 card bg-secondary border-0' style={{ width: '15rem' }}>
                        <img className='card-img-top' src={'https://image.tmdb.org/t/p/w500' + item.poster_path} />
                        <h3 className='m-1 text-light my-auto'>{item.title}</h3>
                        <h6 className='m-1 text-light'>Lançamento: {item.release_date}</h6>
                        <h6 className='m-1 text-light'>Nota: {item.vote_average}</h6>
                        <div className='d-grid gap-2 col-6 mx-auto'>
                            <Link href={'/filmes/' + item.id} className='btn btn-success m-2'>Detalhes</Link>
                        </div>
                    </div>
                ))}
            </Container>

        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results

    return {
      props: {filmes}, // will be passed to the page component as props
    }
  }