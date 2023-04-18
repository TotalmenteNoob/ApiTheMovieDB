import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

const index = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('/movie/now_playing').then(resultado => { setFilmes(resultado.data.results) })
    }, [])

    return (
        <Pagina titulo="Filmes populares">
            <Container className='d-flex flex-row flex-wrap justify-content-center'>
                {filmes.map(item => (
                    <div className='m-1 card bg-secondary' style={{ width: '15rem' }}>
                        <img className='card-img-top' src={'https://image.tmdb.org/t/p/w500' + item.poster_path} />
                        <h3 className='m-1 text-light'>{item.title}</h3>
                        <h6 className='m-1 text-light'>Lançamento: {item.release_date}</h6>
                        <h6 className='m-1 text-light'>Nota: {item.vote_average}</h6>
                    </div>
                ))}
            </Container>

        </Pagina>
    )
}

export default index