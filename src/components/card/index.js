import "./style.css";
//import { addCarrinho } from "../../store/modules/car/actions";
//import { useDispatch } from "react-redux";
import { useCarrinho } from "../../providers/carrinho";

function Card({ produtos, setWindow }) {
  /*
   * funçao addCarrinho()
  const carrinho = useSelector((store) => store.car);
   */
  //const dispatch = useDispatch();
  const { addCarrinho } = useCarrinho();

  return (
    <section id="cards">
      {produtos.map((item, index) => (
        <div className="cards-item" key={item.id}>
          <figure>
            <img alt="img" src={item.img} className="cards-img" />
          </figure>
          <div className="cards-description">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <h4 className="cards-price">R$: {item.price} </h4>
          </div>
          <button
            onClick={() => {
              addCarrinho(item);
              setWindow(true);
            }}
            className="cards-button"
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </section>
  );
}

export default Card;
