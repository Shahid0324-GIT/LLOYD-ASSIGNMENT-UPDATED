import { FaChevronRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";
import "./index.css";

// eslint-disable-next-line react/prop-types
const ProductsDisplay = ({ product, index }) => {
  // eslint-disable-next-line react/prop-types
  const { name, products } = product;
  // console.log(products);
  return (
    <>
      <li className="app__product-card-desktop" id={name}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="app__product-display-name">
            {name} <FaChevronRight />
          </h2>
          <a
            href="#"
            target="_parent"
            style={{
              color: "blue",
            }}
          >
            View All
          </a>
        </div>
        <div className="app__product-display-items">
          {products.map((item) => {
            const { id } = item;
            return <ProductCard key={id} item={item} sectionName={name} />;
          })}
        </div>
      </li>

      <li className="app__product-card-mobile" id={`${index}${name}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="app__product-display-name">
            {name} <FaChevronRight />
          </h2>
          <a
            href="#"
            target="_parent"
            style={{
              color: "blue",
            }}
          >
            View All
          </a>
        </div>
        <div className="app__product-display-items-mobile">
          {products.map((item) => {
            const { id } = item;
            return <ProductCard key={id} item={item} sectionName={name} />;
          })}
        </div>
      </li>
    </>
  );
};

export default ProductsDisplay;
