//import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
//import Carrinho from "../pages/carrinho";
import Header from "../components/header";
import Login from "../pages/Login";
import { produtosLoja } from "../components/produtos";
import { useState } from "react";

const Routes = () => {
  const [window, setWindow] = useState(false);
  const [mostra, setMostra] = useState(produtosLoja);

  const filterProd = (param) => {
    if (param === "" || param === " ") {
      setMostra(produtosLoja);
    } else {
      setMostra(produtosLoja.filter((elm) => elm.name.includes(param)));
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header setWindow={setWindow} funcao={filterProd} />
          <Home window={window} setWindow={setWindow} produtos={mostra} />
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
