import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import banner from "../assets/banner.png";

import { DishCard } from "../components/DishCard";
import { api } from "../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/?name=${search}`);
      setDishes(response.data);
    }
    fetchDishes();
  }, [search]);
  return (
    <div className="max-w-screen flex min-h-screen flex-col justify-between">
      <Header search={setSearch} />
      <main className="flex-1 p-6 md:px-[120px]">
        {/* Banner */}
        <div className="relative z-0 mt-5 flex flex-col-reverse items-center justify-center gap-2 rounded-md bg-gradient-to-b from-dark-900 to-dark-600 p-2 sm:flex-row md:justify-evenly">
          <img
            src={banner}
            alt="Banner FoodExplorer"
            className="w-[250px] md:w-[350px] lg:w-[450px] xl:w-[550px]"
          />

          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-xl font-bold leading-tight sm:text-2xl">
              Sabores inigualáveis
            </h1>
            <span className="text-xs sm:text-base">
              Sinta o cuidado do preparo com ingredientes selecionados.
            </span>
          </div>
        </div>

        <div>
          <h2 className="mb-5 mt-10 text-xl font-medium leading-relaxed">
            Refeições
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {dishes &&
              dishes
                .filter((dish) => dish.category == "dishes")
                .map((dish, index) => (
                  <DishCard data={dish} key={String(index)} />
                ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 mt-10 text-xl font-medium leading-relaxed">
            Sobremesas
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {dishes &&
              dishes
                .filter((dish) => dish.category == "dessert")
                .map((dish, index) => (
                  <DishCard data={dish} key={String(index)} />
                ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 mt-10 text-xl font-medium leading-relaxed">
            Bebidas
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {dishes &&
              dishes
                .filter((dish) => dish.category == "drinks")
                .map((dish, index) => (
                  <DishCard data={dish} key={String(index)} />
                ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
