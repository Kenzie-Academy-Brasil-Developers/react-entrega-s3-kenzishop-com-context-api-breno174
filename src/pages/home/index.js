import { useState } from "react";
//import { useDispatch } from "react-redux";
import { produtosLoja } from "../../components/produtos";
// 2 - importe o seu thunk
// import { addCommentThunk } from "../../store/modules/user/thunks";
import { Countainer } from "./style";
import Card from "../../components/card";
import Carrinho from "../carrinho";
import { useProdutos } from "../../providers/produtos";

function Home({ window, setWindow }) {
  //
  //const dispatch = useDispatch();
  //eu quero usar u useState para fazer o carrinho desaparecer assim que clicar na aba do home,
  //esse state não deve ficar dentro do home, mas como props para ele.

  const { produtos } = useProdutos();
  console.log(produtos, "lista de produtos");

  return (
    <>
      {window ? (
        <>
          <Countainer onClick={() => setWindow(false)}>
            <div id="home">
              <Card produtos={produtos} setWindow={setWindow} />
            </div>
          </Countainer>
          <Carrinho window={window} setWindow={setWindow} />
        </>
      ) : (
        <>
          <Countainer onClick={() => console.log("nicolas kage")}>
            <div id="home">
              <Card produtos={produtos} setWindow={setWindow} />
            </div>
          </Countainer>
          <Carrinho window={window} setWindow={setWindow} />
        </>
      )}
    </>
  );
}

export default Home;

/**
 * <Countainer
    onClick={() => {
      console.log("nicolas kage");
    }}
  >
    <div id="home">
      <Card produtos={produtosLoja} setWindow={setWindow} />
    </div>
    <Carrinho window={window} setWindow={setWindow} />
  </Countainer>
 */
