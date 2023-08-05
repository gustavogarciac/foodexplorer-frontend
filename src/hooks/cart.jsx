import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [],
  );

  function addDishToCart(data, quantity) {
    try {
      const { id, name, price, image } = data;
      /* Validation */
      cart.map((item) => {
        if (item.id === id) {
          removeDishFromCart(item.id);
          alert("Este prato já está no seu carrinho.");
        }
      });

      if (quantity === 0) {
        return alert("Você precisa adicionar ao menos uma unidade.");
      }

      const newCartDish = {
        id,
        name,
        price,
        image,
        quantity,
      };
      setCart((prevState) => [...prevState, newCartDish]);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar o prato ao carrinho.");
      }
    }
  }

  function removeDishFromCart(deleted) {
    setCart(cart.filter((dish) => dish.id !== deleted));
  }

  useEffect(() => {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addDishToCart, removeDishFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
