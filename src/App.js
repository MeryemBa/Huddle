import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage-comp";
import ErrorPage from "./pages/errorPage/errorPage-comp";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route  exact path="/" component={HomePage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
