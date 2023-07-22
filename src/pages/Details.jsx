import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TextButton } from "../components/TextButton";
import { Button } from "../components/Button";

import { Link } from "react-router-dom";

import DishImage from "../assets/Dish.png";
import { Minus, Plus, Receipt } from "lucide-react";

export function Details() {
  const admin = false;
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-5 p-10 md:px-[120px]">
        <TextButton />

        <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-center md:gap-10">
          <img
            src={DishImage}
            alt="Foto Salada Ravanello"
            className="md:w-[350px]"
          />

          <div className="flex flex-col">
            <div className="flex flex-col text-center">
              <h2 className="text mb-8 mt-4 text-3xl font-medium leading-none">
                Salada Ravanello
              </h2>
              <span>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim
              </span>
            </div>

            {/* Ingredients */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-md bg-dark-1000 p-2 lowercase">
                alface
              </span>
              <span className="rounded-md bg-dark-1000 p-2 lowercase">
                cebola
              </span>
              <span className="rounded-md bg-dark-1000 p-2 lowercase">
                pão naan
              </span>
              <span className="rounded-md bg-dark-1000 p-2 lowercase">
                pepino
              </span>
              <span className="rounded-md bg-dark-1000 p-2 lowercase">
                rabanete
              </span>
              <span className="rounded-md bg-dark-1000 p-2 lowercase">
                tomate
              </span>
            </div>

            {/* CTA */}
            {!admin ? (
              <div className="mt-5 flex items-center justify-center gap-4 md:justify-evenly">
                <div className="flex cursor-pointer items-center gap-3 text-3xl font-medium">
                  <Plus className="transition-all hover:scale-125 hover:text-green-700" />
                  <span className="cursor-default">01</span>
                  <Minus className="transition-all hover:scale-125 hover:text-tomato-300" />
                </div>

                <div className="w-[200px]">
                  <Button title={`pedir R$25,00`} icon={<Receipt />} />
                </div>
              </div>
            ) : (
              <Link to="/edit" className="mt-6 max-w-[250px]">
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
