import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "../pages/Counter";
import Home from "../pages/Home";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <h1>Soy un titulo genial :p</h1>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/counter" component={Counter}></Route>
        </Switch>
        <h1>Soy un footer genial :p</h1>
      </BrowserRouter>
    </div>
  );
}

export default Router;
