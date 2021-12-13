import "./style.css";
import { useState } from "react";
//import { AiOutlineShop } from "react-icons/all";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header({ setWindow, funcao }) {
  const [procurados, setProcurados] = useState("");
  console.log(procurados);

  return (
    <header className="App-header">
      <h1 id="Title">Book Store</h1>
      <div id="box-search">
        <label className="label" htmlFor="search">
          Search:
        </label>
        <input
          name="search"
          id="search"
          placeholder="procurar por produto"
          onChange={(evt) => setProcurados(evt.target.value)}
        />
        <button
          id="submit"
          //onClick={() => funcao(procurados)}
        >
          Search
        </button>
      </div>
      <div>
        <div id="icon">
          <BiCart onClick={() => setWindow(true)} />
          <Link id="link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
