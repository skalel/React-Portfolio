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
        <br />
        <p>
          No intuito de me conhecerem um pouco mais, deixarei abaixo alguns
          &quot;Top 5&quot; de coisas que gosto.
        </p>
      </div>
      <br />
      <div className="contentBox">
        <Content>
          <h4>Interesses na Tecnologia</h4>
          <hr />
          <ul>
            <li>Inteligência Artificial</li>
            <li>Internet das Coisas</li>
            <li>Desenvolvimento de Games</li>
            <li>Desenvolvimento Web</li>
            <li>Segurança da Informação</li>
          </ul>
        </Content>
        <Content>
          <h4>Inspirações</h4>
          <hr />
          <ul>
            <li>id Tech</li>
            <li>Filipe Deschamps</li>
            <li>Rocketseat</li>
            <li>From Software</li>
            <li>Gabriel Pato</li>
          </ul>
        </Content>
        <Content>
          <h4>Franquias de Jogos prediletos</h4>
          <hr />
          <ul>
            <li>Souls</li>
            <li>The Legend of Zelda</li>
            <li>Doom</li>
            <li>Silent Hill</li>
            <li>Resident Evil</li>
          </ul>
        </Content>
        <Content>
          <h4>Séries prediletas</h4>
          <hr />
          <ul>
            <li>Dark</li>
            <li>Mr. Robot</li>
            <li>Game of Thrones</li>
            <li>Breaking Bad</li>
            <li>Umbrella Academy</li>
          </ul>
        </Content>
      </div>
    </Conteiner>
  );
}

export default AboutMe;
