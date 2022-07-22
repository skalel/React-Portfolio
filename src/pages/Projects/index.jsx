import styled from "styled-components";
import { lighten, shade } from "polished";
import { AiOutlineGithub, AiOutlineLink, AiOutlineEye } from "react-icons/ai";
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

  @media screen and (max-width: 810px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const ProjectsBox = styled.div`
  width: 45%;
  border-radius: 30px;
  background-color: ${lighten(0.05, "#373333")};
  margin: 16px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 2px 2px 1px 6px ${shade(0.3, "#373333")};

  .ImageHolder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    & > img {
      margin: 8px 0;
      width: 80%;
      height: auto;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 810px) {
    width: 95%;
  }
`;

const TextConteiner = styled.div`
  text-align: center;

  & > h3,
  & > p {
    margin: 8px 4px;
  }

  & > .ProjectLinks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 12px 4px;
  }
`;

const ButtonModel = styled.div`
  border: 2px solid var(--detailsColorPrimary);
  border-radius: 20px;

  padding: 4px;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--detailsColorPrimary);
    & > a {
      color: ${lighten(0.05, "#373333")};
    }
  }

  & > a {
    padding: 4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
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
                  <img alt={data.name} src={data.img_url} title={data.name} />
                </div>
                <TextConteiner>
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                  <div className="ProjectLinks">
                    {data.accessible === true ? (
                      <ButtonModel>
                        <a href={data.url} target="_blank" rel="noreferrer">
                          <AiOutlineLink size={20} /> Link
                        </a>
                      </ButtonModel>
                    ) : (
                      ""
                    )}
                    {data.accessible === false ? (
                      <ButtonModel>
                        <a
                          href={data.snapshot}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineEye size={20} /> Visualização
                        </a>
                      </ButtonModel>
                    ) : (
                      ""
                    )}
                    {data.gh_url !== "" ? (
                      <ButtonModel>
                        <a href={data.gh_url} target="_blank" rel="noreferrer">
                          <AiOutlineGithub size={20} /> GitHub Repo
                        </a>
                      </ButtonModel>
                    ) : (
                      ""
                    )}
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
