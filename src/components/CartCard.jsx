import defaultDishImage from "../assets/Dish.png";
import { useCartContext } from "../hooks/cart";
import { api } from "../services/api";

export function CartCard({ data }) {
  const dishImage = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : defaultDishImage;

  const { removeDishFromCart } = useCartContext();

  return (
    <article className="flex items-center gap-4">
      <img
        src={dishImage}
        alt="Prato"
        className="aspect-square max-w-[100px]"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-poppins text-sm leading-5">
            {data && data.name}
          </h2>
          <span className="text-sm text-zinc-400">${data && data.price}</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-sm text-zinc-400">
            Qtd: {data && data.quantity}
          </span>
          <button
            onClick={() => removeDishFromCart(data.id)}
            className="text-sm text-zinc-400 transition-colors duration-300 ease-in-out hover:text-tomato-200"
          >
            Remover
          </button>
        </div>
      </div>
    </article>
  );
}
