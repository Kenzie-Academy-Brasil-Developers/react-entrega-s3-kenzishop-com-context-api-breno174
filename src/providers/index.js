//arquivo opcional
import { CarrinhoProvider } from "./carrinho";
import { ProdutosProvider } from "./produtos";

//*estrutura base - serve para compilar meus componentes => facilitador para o index
function Provider({ children }) {
  //children representa o meu App * nesse contexto => param para componente

  return (
    <ProdutosProvider>
      <CarrinhoProvider>{children}</CarrinhoProvider>
    </ProdutosProvider>
  );
}

export default Provider;
// export para o index.js
