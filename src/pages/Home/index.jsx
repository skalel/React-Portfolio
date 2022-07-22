import styled, { keyframes } from "styled-components";

const Appear = keyframes`
0%{
  visibility: hidden;
  opacity: 0;
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

  @media screen and (max-width: 810px) {
    height: 199vmin;
  }
`;

const Box = styled.div`
  width: 40%;
  height: 150px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 811px) {
    animation: ${Appear} 2s ease-in-out,
      ${ColorChange} 24s infinite alternate ease-in-out;

    min-width: 500px;

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

    &:hover {
      &::before {
        visibility: visible;
        opacity: 1;
        width: 500px;
        height: 150px;
      }
    }
  }

  @media screen and (max-width: 810px) {
    min-width: 320px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 320px;
      height: 150px;
      border: 4px solid var(--detailsColorPrimary);
    }
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
