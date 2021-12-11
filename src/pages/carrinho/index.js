//import { useDispatch, useSelector } from "react-redux";
import Compras from "../../components/compras";
//import { esvaziar, remCarrinho } from "../../store/modules/car/actions";
import { Content, Counteiner, Heade, Card, Button, Back } from "./style";
import { useCarrinho } from "../../providers/carrinho";

function Carrinho({ window, setWindow }) {
  //
  //const dispatch = useDispatch();
  // const carrinho = useSelector((store) => store.car);
  const { carrinho } = useCarrinho();

  console.log(carrinho, "carrinho");
  const reducer = (acc, cur) => acc + cur.price;
  const total = carrinho.reduce(reducer, 0);

  return (
    <>
      <Back
        window={window}
        onClick={() => {
          setWindow(false);
          console.log("back window");
        }}
      />
      <Counteiner window={window}>
        <Heade>
          <h2>Compras</h2>
        </Heade>
        {carrinho.length === 0 ? (
          <Content>
            <h3>Carrinho vazio</h3>
            <p>adicione itens ao carrinho</p>
            <p>aproveite as promoções</p>
          </Content>
        ) : (
          <>
            {carrinho.map((prod, index) => (
              <Content key={index}>
                <Card>
                  <div className="car-image">{prod.img}imagem</div>
                  <div className="car-description">
                    <p className="car-title">{prod.name}</p>
                    <p className="car-price">R$: {prod.price}</p>
                  </div>
                  <button
                    className="card-remove"
                    //onClick={() => dispatch(remCarrinho(prod))}
                  >
                    X
                  </button>
                </Card>
              </Content>
            ))}
            <div id="total">
              <u>Total: R$ {total.toFixed(2)}</u>
            </div>
            <Button
            //onClick={() =>  dispatch(esvaziar())}
            >
              Esvaziar carrinho
            </Button>
          </>
        )}
      </Counteiner>
    </>
  );
}

export default Carrinho;
