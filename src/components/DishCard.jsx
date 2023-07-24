import { Counter } from "../components/Counter";
import { Button } from "./Button";

import dish from "../assets/Dish.png";

import { ArrowRight } from "lucide-react";

export function DishCard() {
  return (
    <div className="flex w-[220px] flex-col items-center rounded-lg border border-dark-700 bg-dark-200 p-6 text-center shadow-md shadow-dark-400">
      <img src={dish} alt="Foto do Prato" className="m-auto max-w-[88px]" />
      <h3 className="mt-2 flex cursor-pointer items-center gap-1 leading-relaxed">
        Salada Ravanello
        <ArrowRight className="w-[15px]" />
      </h3>
      <span className="my-1 block font-medium text-cake-200">R$ 49,97</span>
      <div className="my-2 flex items-center justify-center">
        <Counter />
      </div>
      <Button title="incluir" />
    </div>
  );
}
