import "./style.css";
//import { AiOutlineShop } from "react-icons/all";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header({ setWindow }) {
  return (
    <header className="App-header">
      <h1 id="Title">Book Store</h1>
      <div>
        <label className="label" htmlFor="search">
          Procurar produto:
        </label>
        <input name="search" id="search" placeholder="procurar por produto" />
      </div>
      <div>
        <div id="icon">
          Compras: <BiCart onClick={() => setWindow(true)} />
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
