import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={ Appointments } />
          <Route exact path="/doctors" component={ Doctors } />
          <Route exact path="/patients" component={ Patients } />
          <Route component={() => <h3>react router 404 path not found..!</h3>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
