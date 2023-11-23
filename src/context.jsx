import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [cartList, setCartList] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d"
    );

    if (response.ok) {
      const data = await response.json();
      setFetchedProducts(data.categories);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onAdd = (item) => {
    setCartList((prev) => [...prev, item]);
  };

  const onRemove = (id) => {
    const filter = cartList.filter((item) => item.id !== id);
    setCartList(filter);
  };

  const onClear = () => setCartList([]);

  return (
    <GlobalContext.Provider
      value={{
        setFetchedProducts,
        fetchedProducts,
        setCartList,
        onAdd,
        onRemove,
        cartList,
        onClear,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
