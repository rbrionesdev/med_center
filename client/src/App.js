import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "./pages/Routes";

function App() {
  const renderRoutes = () => {
    return Routes.map((route) => (
      <Route exact path={route.pathname} component={route.component} />
    ));
  };
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          {renderRoutes()}
          <Route component={() => <h1>react router 404  path not found</h1>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
