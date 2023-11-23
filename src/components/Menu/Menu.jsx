import { useState } from "react";

import { useGlobalContext } from "../../context";
import { CiShirt, CiClock1 } from "react-icons/ci";
import { HiDevicePhoneMobile, HiShoppingCart } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";
import ProductsDisplay from "../ProductsDisplay/ProductsDisplay";
import "./index.css";

const arr = [
  {
    icon: <CiShirt />,
    label: "Women's clothing",
  },
  {
    icon: <CiShirt />,
    label: "Men' Clothing",
  },
  {
    icon: <CiShirt />,
    label: "Fashion Clothing",
  },
  {
    icon: <CiClock1 />,
    label: "Watches",
  },
  {
    icon: <HiDevicePhoneMobile />,
    label: "Electronics",
  },
  {
    icon: <HiShoppingCart />,
    label: "Fresh",
  },
  {
    icon: <FaApple />,
    label: "Groceries",
  },
];

const Menu = () => {
  const { fetchedProducts } = useGlobalContext();
  const [active, setActive] = useState("Women's clothing");
  //   console.log(fetchedProducts);
  return (
    <>
      <div className="app__home-page-desktop">
        <article className="app__home-page-side-menu">
          <ul className="app__side-menu-items">
            {fetchedProducts.map((category, index) => {
              return (
                <li key={`${index}-${category.name}}`}>
                  <a
                    className={
                      category.name === active
                        ? "app__side-menu-btn active"
                        : "app__side-menu-btn"
                    }
                    onClick={() => setActive(category.name)}
                    href={`#${category.name}`}
                  >
                    {category.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <ul className="app__home-page-prduct-display">
          {fetchedProducts.map((product, index) => (
            <ProductsDisplay
              product={product}
              key={`@${index}-${product.name}`}
            />
          ))}
        </ul>
      </div>
      <div className="app__home-page-mobile">
        <div className="app__home-page-layout-mobile">
          <div className="fixed">
            <div className="app__home-page-mobile-categories-section">
              {arr.map((product, index) => {
                return (
                  <div
                    className="app__mobile-productcard"
                    key={`${index}-${product.label}`}
                  >
                    <a
                      className={
                        product.label === active
                          ? "app__mobile-icon active"
                          : "app__mobile-icon"
                      }
                      onClick={() => setActive(product.label)}
                      href={`#${index}${product.label}`}
                    >
                      {product.icon}
                    </a>
                    <p
                      className={
                        product.label === active
                          ? "app__mobile-label active-label"
                          : "app__mobile-label"
                      }
                    >
                      {product.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <ul className="app__home-page-mobile-products-section">
            {fetchedProducts.map((product, index) => (
              <ProductsDisplay
                product={product}
                key={`@${index}-${product.name}`}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
