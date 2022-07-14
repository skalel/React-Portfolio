import styled from "styled-components";
import { Link } from "react-router-dom";
import Conteiner from "../Styles/generalStyles";

const MainTopic = styled.h3`
  color: var(--detailsColorPrimary);
`;

function Development() {
  return (
    <Conteiner>
      <div>
        <h1>Desenvolvimento</h1>
      </div>
      <br />
      <div>
        <MainTopic>Atualmente</MainTopic>
        <br />
        <p>
          Atualmente me encontro estudando Node.JS e me aprofundando ainda mais
          no React. Porém, estou iniciando estudos em Java e SpringBoot para
          Back-end e React para Front-end. <br />
          Estou fazendo parte do Bootcamp Fullstack da DIO com a TQI para
          desenvolvimento Fullstack.
        </p>
        <br />
        <MainTopic>Conhecimentos</MainTopic>
        <br />
        <p>
          Possuo conhecimento e experiência em programação em HTML, CSS,
          JavaScript, React e um pouco de PHP. <br />
          Possuo também projetos utilizando de Frameworks de e-Commerce como
          NuvemShop e Loja Integrada e também experiência com Wordpress. <br />
          Possuo também experiência de trabalho com Bancos de dados relacionais
          SQL Server e Oracle.
        </p>
        <br />
      </div>
      <Link to="/projects">Clique aqui para ver meus projetos.</Link>
    </Conteiner>
  );
}

export default Development;
