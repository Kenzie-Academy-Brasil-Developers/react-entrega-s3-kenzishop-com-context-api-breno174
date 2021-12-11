//import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
//import Carrinho from "../pages/carrinho";
import Header from "../components/header";
import Login from "../pages/Login";
import { useState } from "react";

const Routes = () => {
  const [window, setWindow] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header setWindow={setWindow} />
          <Home window={window} setWindow={setWindow} />
        </Route>

        <Route path="/login">
          <Header />
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

/**
 * 
    <Route path="/carrinho">
      <Carrinho />
    </Route>
 * 
  <Router path="/carrinho" component={Carrinho} />
 */
