import styled from "styled-components";
import data from "./data.json";
import Conteiner from "../Styles/generalStyles";

const MainTopic = styled.h3`
  color: var(--detailsColorPrimary);
`;

const ProjectsConteiner = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ProjectsBox = styled.div`
  width: 45%;
  background-color: white;
  opacity: 0.3;
  color: black;

  margin: 8px 0;

  .ImageHolder {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    & > img {
      margin: 8px 0;
      width: 341.5px;
      height: 192px;
    }
  }
`;

const TextConteiner = styled.div`
  text-align: center;

  & > .ProjectLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

function Projects() {
  return (
    <Conteiner>
      <div>
        <h1>Projetos</h1>
      </div>
      <div>
        <br />
        <MainTopic>Esses são projetos efetuados e entregues.</MainTopic>
        <br />
        <p>
          Todos foram feitos com muito carinho e visando o desejo dos clientes.
          Totalmente customizado à vontade dos mesmos.
        </p>
        <br />

        <ProjectsConteiner>
          {data.projects.map(data =>
            data.available ? (
              <ProjectsBox key={data.id}>
                <div className="ImageHolder">
                  <img alt={data.name} src={data.img_url} />
                </div>
                <TextConteiner>
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                  <div className="ProjectLinks">
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                  </div>
                </TextConteiner>
              </ProjectsBox>
            ) : (
              ""
            ),
          )}
        </ProjectsConteiner>
      </div>
    </Conteiner>
  );
}

export default Projects;
