import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root{
   --bkgColorPrimary: #373333;
   --fontColorPrimary: #dddddd;
   --detailsColorPrimary: #c5ff6a;
   --detailsColorSecondary: #0e163e;
   --menuColor: #504949;
 }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    code{
      font-family: monospace;
    }
  }
  body{
    background-color: var(--bkgColorPrimary);
    color: var(--fontColorPrimary);
    &  a{
      color: var(--detailsColorPrimary);
    }
  }
  #root{
    display: flex;
  }
  @media screen and (max-width: 810px){
    #root {
      flex-direction: column;
    }
  }
`;
