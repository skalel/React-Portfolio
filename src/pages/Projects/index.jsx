import styled from "styled-components";
import Conteiner from "../Styles/generalStyles";

const MainTopic = styled.h3`
  color: var(--detailsColorPrimary);
`;

function Projects() {
  return (
    <Conteiner>
      <div>
        <h1>Projetos</h1>
      </div>
      <div>
        <br />
        <MainTopic>Esses são projetos já realizados para clientes</MainTopic>
        <br />
        <p>
          Todos foram feitos com muito carinho e visando o desejo dos clientes.
          Totalmente customizado à vontade dos mesmos.
        </p>
        <br />
      </div>
    </Conteiner>
  );
}

export default Projects;
