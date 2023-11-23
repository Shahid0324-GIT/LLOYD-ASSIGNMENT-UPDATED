import { useGlobalContext } from "../../context";
import "./index.css";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const { cartList, onClear } = useGlobalContext();
  return (
    <header>
      <nav>
        <h1>E-commerce</h1>
        <div className="btn-container">
          <div className="btn app__cart-icon">
            <AiOutlineShoppingCart /> {cartList.length ? cartList.length : 0}
          </div>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => onClear()}
          >
            Clear Cart
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
