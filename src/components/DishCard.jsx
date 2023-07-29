import { Counter } from "../components/Counter";
import { Button } from "./Button";

import defaultDishImage from "../assets/Dish.png";

import { ArrowRight, User } from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

export function DishCard({ data, ...rest }) {
  const { user } = useAuth();
  const dishImage = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : defaultDishImage;

  return (
    <div className="flex w-full flex-col items-center rounded-lg border border-dark-700 bg-dark-200 p-6 text-center shadow-md shadow-dark-400">
      <img
        src={dishImage}
        alt="Foto do Prato"
        className="m-auto max-w-[88px]"
      />
      <Link
        to={`/details/${data.id}`}
        className="mt-2 flex cursor-pointer items-center gap-1 leading-relaxed"
      >
        {data.name}
        <ArrowRight className="w-[15px]" />
      </Link>
      {!user.isAdmin ? (
        <div>
          <span className="my-1 block font-medium text-cake-200">
            R$ {data.price}
          </span>
          <div className="my-2 flex items-center justify-center">
            <Counter />
          </div>
          <Button title="incluir" />
        </div>
      ) : (
        <div className="mt-3 w-full space-y-4">
          <span className="my-1 block font-medium text-cake-200">
            R$ {data.price}
          </span>
          <Link to={`/edit/${data.id}`}>
            <Button title="Editar prato" />
          </Link>
        </div>
      )}
    </div>
  );
}
