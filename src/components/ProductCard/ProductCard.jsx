import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./index.css";
import { useGlobalContext } from "../../context";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ item }) => {
  const { onAdd, onRemove, cartList } = useGlobalContext();

  const { name, weight, price, image } = item;

  const show = cartList.find((prod) => item.id === prod.id);

  return (
    <div className="app__product-card-container">
      <div className="app__product-image-container">
        <img src={image} alt={`${name}`} />
      </div>

      {show ? (
        <AiFillMinusCircle className="icon" onClick={() => onRemove(item.id)} />
      ) : (
        <AiFillPlusCircle className="icon" onClick={() => onAdd(item)} />
      )}
      <h5>{price}</h5>
      <p className="app__product-name">{name}</p>
      <p className="app__product-price">{weight}</p>
    </div>
  );
};

export default ProductCard;
