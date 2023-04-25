import Pagina from "@/components/Pagina";
import apiFilmes from "@/services/apiFilmes";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Detalhes = ({ filme, atores }) => {
  const data = new Date(filme.release_date);
  const dataFormatada = data.toLocaleDateString("pt-BR");
  return (
    <Pagina titulo={filme.title}>
      <Container>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path}
            />
          </Col>

          <Col md={8}>
            <p className="fs-3">
              <strong>Sinopse: </strong>
              {filme.overview}
            </p>
            <p className="fs-3">
              <strong>Lançamento: </strong>
              {dataFormatada}
            </p>
            <p className="fs-3">
              <strong>Duração: </strong>
              {filme.runtime} minutos
            </p>
            <p className="fs-3">
              <strong>Nota: </strong>
              {filme.vote_average}
            </p>
            <p className="fs-3">
              <strong>Gênero: </strong>
              {filme.genres.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && ", "}
                  {item.name}
                </React.Fragment>
              ))}
            </p>
          </Col>
        </Row>
        <h2 className="my-3">
          <strong>Atores: </strong>
        </h2>
        <Row>
          {atores.map(item => (
            <Col md={2}>
              <Link href={"/atores/" + item.id}>
                <Card.Img
                  className="my-2"
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const id = context.params.id; //o 'context.params é padrão do axios assim como o .data, já o id tem que ser o mesmo nome do arquivo'

  const resultado = await apiFilmes.get("/movie/" + id);
  const filme = resultado.data;

  const resultadoAtores = await apiFilmes.get("/movie/" + id + "/credits");
  const atores = resultadoAtores.data.cast;

  return {
    props: { filme, atores }, // will be passed to the page component as props
  };
}
