import React from "react";
import { Switch , Link, Route, Router } from "wouter";
import Proyectos from "./routes/Projects";
import Habilidades from "./routes/Skills";
import Inicio from "./routes/Home";
import Contacto from "./routes/Contact";


function App() {
  return (
    <Router>
      <div className="container">
        <div className="container-group">
          <Link to="/" className="btn">
            Inicio
          </Link>
          <Link to="/contacto" className="btn">
            Contacto
          </Link>
          <Link to="/proyectos" className="btn">
            Proyectos
          </Link>
          <Link to="/habilidades" className="btn">
            Habilidades
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/proyectos">
            <Proyectos />
          </Route>
          <Route path="/habilidades">
            <Habilidades />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
