function Compras({ produtos }) {
  /*
   * funçao remCarrinho()
   */

  return (
    <>
      {produtos.map((item, index) => (
        <div key={item.id}>
          <figure>
            <img alt="img" src={item.img} className="cards-img" />
          </figure>
          <div className="cards-description">
            <h4>{item.name}</h4>
            <h4> {item.price} </h4>
          </div>
          <button onClick="click">X</button>
        </div>
      ))}
    </>
  );
}

export default Compras;
