import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Detalhes = ({ filme, atores }) => {
    const data = new Date(filme.release_date);
    const dataFormatada = data.toLocaleDateString('pt-BR');
    return (
        <Pagina titulo={filme.title}>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Col>

                    <Col md={8}>
                        <p><strong>Sinopse: </strong>{filme.overview}</p>
                        <p><strong>Lançamento: </strong>{dataFormatada}</p>
                        <p><strong>Duração: </strong>{filme.runtime} minutos</p>
                        <p><strong>Nota: </strong>{filme.vote_average}</p>
                        <p><strong>Gênero: </strong>  {filme.genres[0].name}</p>
                        <p><strong>Gênero: </strong>{filme.genres.map(item => (<>{item.name}, </>))}</p>
                    </Col>
                </Row>
                <h2><strong>Atores: </strong></h2>
                <Row md={6}style={{ width: '75%' }}>
                    <Col>
                        {atores.map(item => (
                            <img className='my-1' src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                        ))}
                    </Col>
                </Row>

            </Container>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id //o 'context.params é padrão do axios assim como o .data, já o id tem que ser o mesmo nome do arquivo'

    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data

    const resultadoAtores = await apiFilmes.get('/movie/' + id + '/credits')
    const atores = resultadoAtores.data.cast

    return {
        props: { filme, atores }, // will be passed to the page component as props
    }
}