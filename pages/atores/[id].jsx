import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import apiFilmes from "@/services/apiFilmes";
import { Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const Atores = ({ ator, fotos, filmes, series}) => {
  const data = new Date(ator.birthday);
  const dataFormatada = data.toLocaleDateString("pt-BR");
  return (
    <Pagina titulo={ator.name}>
      <Container>
        <Row>
          <Col md={3}>
            <Card.Img
              variant="top"
              src={"https://image.tmdb.org/t/p/w500/" + ator.profile_path}
            ></Card.Img>
          </Col>
          <Col>
            <p className="fs-3">
              <strong>Data de nascimento: </strong>
              {dataFormatada}
            </p>
            <p className="fs-3">
              <strong>Local de nascimento: </strong>
              {ator.place_of_birth}
            </p>
            <p className="fs-3">{ator.biography}</p>
          </Col>
        </Row>
        <h2 className="mt-5">
          <strong>Mais fotos</strong>
        </h2>
        <Row>
          {fotos.map(item => (
            <Col md={2} className="my-1">
                <Card.Img variant="top" src = {"https://image.tmdb.org/t/p/w500/" + item.file_path}></Card.Img>
            </Col>
          ))}
        </Row>
        <h2 className="mt-5">
          <strong>Filmes</strong>
        </h2>
        <Row>
            {filmes.map(item =>(
            <Col md={2} className="my-1">
                <Link href={"/filmes/" + item.id}><Card.Img variant="top" src = {"https://image.tmdb.org/t/p/w500/" + item.poster_path}></Card.Img></Link>
            </Col>
            ))}
        </Row>
        <h2 className="mt-5">
          <strong>Séries</strong>
        </h2>
        <Row>
            {series.map(item=>(
                <Col md={2} className="my-1">
                    <Card.Img variant="top" src = {"https://image.tmdb.org/t/p/w500/" + item.poster_path}></Card.Img>
                </Col>
            ))}
        </Row>
      </Container>
    </Pagina>
  );
};

export default Atores;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultadoAtor = await apiFilmes.get("/person/" + id);
  const ator = resultadoAtor.data;

  const resultadoFotos = await apiFilmes.get("/person/" + id + "/images");
  const fotos = resultadoFotos.data.profiles;

  const resultadoFilmes = await apiFilmes.get(
    "/person/" + id + "/movie_credits"
  );
  const filmes = resultadoFilmes.data.cast;

  const resultadoSeries = await apiFilmes.get("/person/" + id + "/tv_credits");
  const series = resultadoSeries.data.cast;

  return {
    props: { ator, fotos, filmes, series }, // will be passed to the page component as props
  };
}
