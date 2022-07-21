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
  min-width: 500px;
  height: 150px;
  padding: 8px;
  animation: ${Appear} 2s ease-in, ${ColorChange} 24s infinite ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    &::before {
      visibility: visible;
      opacity: 1;
      width: 500px;
      height: 150px;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 300px;
    height: 80px;
    visibility: hidden;
    opacity: 0;
    border: 4px solid var(--detailsColorPrimary);
    transition: 0.3s ease-in-out;
  }
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
