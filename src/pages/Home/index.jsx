import styled, { keyframes } from "styled-components";

const Appear = keyframes`
0%{
  visibility: hidden;
  opacity: 0
}
100%{
  visibility: visible;
  opacity: 1;
}
`;

const ColorChange = keyframes`
0%{
  background-color: var(--bkgColorPrimary);
}
100%{
  background-color: var(--menuColor);
}
0%{
  background-color: var(--bkgColorPrimary);
}
`;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  padding: 8px;
`;

const Box = styled.div`
  width: 40%;
  border: 4px solid var(--detailsColorPrimary);
  min-width: 500px;
  padding: 8px;
  animation: ${Appear} 2s ease-in, ${ColorChange} 8s infinite ease-in-out;
`;

const Content = styled.div`
  text-align: center;
  margin: 8px;
`;

function Home() {
  return (
    <Conteiner>
      <Box>
        <Content>
          <h1>Sandro Santos</h1>
        </Content>
        <Content>
          <h2>Desenvolvedor Fullstack</h2>
        </Content>
        <Content>
          <p>Bahia, Brazil.</p>
        </Content>
      </Box>
    </Conteiner>
  );
}

export default Home;
