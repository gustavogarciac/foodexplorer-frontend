import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TextButton } from "../components/TextButton";
import { Button } from "../components/Button";

import { Link, useParams } from "react-router-dom";

import defaultDishImage from "../assets/Dish.png";
import { Minus, Plus, Receipt } from "lucide-react";
import { Counter } from "../components/Counter";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Tag } from "../components/Tag";
import { useAuth } from "../hooks/auth";
import { useCartContext } from "../hooks/cart";

export function Details() {
  const params = useParams();
  const [data, setData] = useState({});
  const { user } = useAuth();
  const { addDishToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const orderPrice = (quantity * data.price).toFixed(2);

  const dishImage = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : defaultDishImage;

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-5 p-10 md:px-[120px]">
        <TextButton />

        <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-center md:gap-12">
          <img
            src={dishImage}
            alt="Foto Salada Ravanello"
            className="rounded-full object-cover md:h-[350px] md:w-[350px]"
          />

          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2 className="text mb-8 mt-4 text-3xl font-medium leading-none">
                {data.name && data.name}
              </h2>
              <span>{data && data.description}</span>
            </div>

            {/* Ingredients */}
            <div className="mt-4 flex flex-wrap gap-3">
              {data.ingredients &&
                data.ingredients.map((ingredient, index) => (
                  <Tag key={String(index)} name={ingredient.name} />
                ))}
            </div>

            {/* CTA */}
            {!user.isAdmin ? (
              <div className="mt-5 flex items-center justify-center gap-4 md:justify-evenly">
                <Counter quantity={quantity} setQuantity={setQuantity} />

                <div className="w-[200px]">
                  <Button
                    title={`pedir R$${orderPrice}`}
                    icon={<Receipt />}
                    onClick={() => addDishToCart(data, quantity)}
                  />
                </div>
              </div>
            ) : (
              <Link to={`/edit/${params.id}`} className="mt-6 max-w-[250px]">
                <Button title="Editar prato" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
