//arquivo opcional
import { CarrinhoProvider, Produto } from "./carrinho";

//*estrutura base - serve para compilar meus componentes => facilitador para o index
function Provider({ children }) {
  //children representa o meu App * nesse contexto => param para componente

  return (
    <Produto>
      <CarrinhoProvider>{children}</CarrinhoProvider>
    </Produto>
  );
}

export default Provider;
// export para o index.js
