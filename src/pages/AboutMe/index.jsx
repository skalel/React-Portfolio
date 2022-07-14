import Content from "../../components/ContentBoxes";
import Conteiner from "../Styles/generalStyles";

function AboutMe() {
  return (
    <Conteiner>
      <div>
        <h1>Bem vindo(a)!</h1>
      </div>
      <br />
      <div>
        <p>Tudo bem com você?</p>
        <p>
          É importante que me apresente... <br /> Me chamo Sandro. Sou graduando
          em Engenharia de Computação, Sou Brasileiro e residente do estado da
          Bahia. Sou apaixonado por tecnologia &quot;desde o berço&quot;.
          Trabalho no ramo como técnico em informática desde meus 14 anos de
          idade, já tive muitas experiências no mercado de trabalho e lido com
          suporte ao usuário em service desk e infraestrutura desde então...
          Após a faculdade (e de ter
          <strong>
            {" "}
            descoberto aos 15 anos que DOOM foi construído utilizando o poder da
            linguagem C
          </strong>
          ) decidi unir esses interesses em uma sede de conhecimentos diversos
          na área da programação.
        </p>
      </div>
      <br />
      <div className="contentBox">
        <Content>
          <h4>Interesses</h4>
          <hr />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </Content>
        <Content>
          <h4>Inspirações</h4>
          <hr />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </Content>
        <Content>
          <h4>Jogos prediletos</h4>
          <hr />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </Content>
        <Content>
          <h4>Séries prediletas</h4>
          <hr />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </Content>
      </div>
    </Conteiner>
  );
}

export default AboutMe;
