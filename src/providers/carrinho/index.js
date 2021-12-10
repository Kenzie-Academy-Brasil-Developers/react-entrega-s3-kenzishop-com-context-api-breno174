//*estrutura báse
import React from "react";
import { createContext, useContext, useState } from "react";

//*estrutura báse
const CarrinhoContext = createContext([]);

const CarrinhoProvider = ({ children }) => {
  //states
  const [carrinho, setCarrinho] = useState([]);
  //funções
  const addCarrinho = (produto) => {
    setCarrinho(...produto);
  };

  //*estrutura báse
  return (
    <CarrinhoContext.Provider
      value={{
        addCarrinho,
        carrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

//*estrutura báse - opcional: serve para acessar as funções e propriedades dentro do value. => objeto
const useCarrinho = () => useContext(CarrinhoContext); //esse é o hook que vai ser importado

export { CarrinhoProvider, useCarrinho };

/////////////////////////////
//import {useCarrinho} from "../caminho"

//const {carinho, addCarrinho} = useCarrinho()

/**
 * COMPONENTE
   return (
      carrinho.map
   )
 */
