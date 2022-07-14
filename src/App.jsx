import { HashRouter } from "react-router-dom";

import { Sidemenu } from "./components/sidemenu";
import { Mobmenu } from "./components/mobMenu";

import Router from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Sidemenu />
        <Mobmenu />
        <Router />
      </HashRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
