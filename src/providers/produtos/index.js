import React from "react";
import { createContext, useContext, useState } from "react";
//imagens]
import chutulu from "../../assets/Chhulu.webp";
import clinicaImg from "../../assets/clinicaAtravesDasImagens.webp";
import conto from "../../assets/imagensQueContamOMundo.webp";
import pele from "../../assets/pelé.webp";
import sapiens from "../../assets/sapiens.webp";
import tempoaceitavel from "../../assets/tempoAceitavel.webp";
import voceSabia from "../../assets/voceSabia.webp";

//*estrutura báse
const ProdutosContext = createContext([]);

const ProdutosProvider = ({ children }) => {
  //states
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      name: "Chutulu",
      img: chutulu,
      price: 27.0,
      description: "livro sobre RPG de terror",
    },
    {
      id: 2,
      name: "Clinica Atraves das imagens",
      img: clinicaImg,
      price: 148.0,
      description: "livro sobre atividades clinicas",
    },
    {
      id: 3,
      name: "Imagens que contam o mundo",
      img: conto,
      price: 150.0,
      description: "livro que contem imagens historicas do mundo todo",
    },
    {
      id: 4,
      name: "Pelé",
      img: pele,
      price: 89.99,
      description: "bibliografia sobre o artista e jogador de futebol Pelé",
    },
    {
      id: 5,
      name: "Sapiens",
      img: sapiens,
      price: 110.2,
      description: "Uma breve historia sobre a origem da humanidade",
    },
    {
      id: 6,
      name: "Tempo aceitável",
      img: tempoaceitavel,
      price: 58.5,
      description: "livro conceitual",
    },
    {
      id: 7,
      name: "Você sabia?",
      img: voceSabia,
      price: 31.0,
      description: "conteudo sobre dois youtubers",
    },
  ]);
  //funções

  //*estrutura báse
  return (
    <ProdutosContext.Provider
      value={{
        produtos,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

const useProdutos = () => useContext(ProdutosContext);

export { ProdutosProvider, useProdutos };
