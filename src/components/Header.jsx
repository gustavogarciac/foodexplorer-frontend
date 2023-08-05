import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

import { LogOut, Menu, Receipt, Search, X } from "lucide-react";
import { Input } from "./Input";
import { Footer } from "./Footer";
import { Button } from "./Button";

import { useAuth } from "../hooks/auth";
import { useCartContext } from "../hooks/cart";
import { CartCard } from "./CartCard";

export function Header({ search }) {
  const { signOut, user } = useAuth();
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const cartDishesPrices = cart
    .map((dish) => {
      const multiplicatePrice = dish.quantity * dish.price;
      return multiplicatePrice;
    })
    .reduce((acc, dish) => acc + dish, 0)
    .toFixed(2);

  function handleSignOut() {
    const logoutConfirmation = confirm(
      "Você tem certeza que deseja sair do sistema?",
    );
    if (logoutConfirmation) {
      navigate("/");
      signOut();
    } else {
      return;
    }
  }

  function handleSidebar() {
    const sidebar = document.querySelector("#sidebar");

    sidebar.classList.toggle("left-[-100%]");
    sidebar.classList.toggle("left-0");
  }

  function handleCartPopup() {
    const cartPopUp = document.querySelector("#cartpopup");
    cartPopUp.classList.toggle("right-[-110%]");
    cartPopUp.classList.toggle("right-0");
  }
  return (
    <header className="flex animate-entering-from-top items-center justify-between gap-16 bg-dark-600 p-6 sm:px-6 sm:py-4 md:px-[120px] md:py-6">
      <div className="md:hidden">
        <button className="grid items-center">
          <Menu onClick={handleSidebar} />
        </button>
      </div>
      <Link to="/">
        <img
          src={logo}
          alt="Logo FoodExplorer"
          className="max-w-[110px] sm:max-w-[200px]"
        />
      </Link>

      <div className="hidden flex-1 md:block">
        <Input
          icon={<Search />}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center space-x-6">
        {user.isAdmin ? (
          <Link
            to="/new"
            className="hidden max-w-fit items-center rounded-md bg-red-600 p-2 sm:grid"
          >
            <span>Novo Prato</span>
          </Link>
        ) : (
          <button
            className="flex max-w-fit items-center justify-center gap-2 rounded-md bg-tomato-200 p-2 transition-colors hover:bg-tomato-100"
            onClick={handleCartPopup}
          >
            <Receipt />
            <span className="hidden sm:flex">Pedidos ({cart.length})</span>
          </button>
        )}

        <button className="bg-transparent">
          <LogOut className="hidden sm:block" onClick={handleSignOut} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className="fixed bottom-0 left-[-100%] top-0 z-20 w-screen bg-dark-400 transition-all duration-500 md:hidden"
        id="sidebar"
      >
        <div className="bg-dark-700 p-6">
          <span className="flex items-center gap-2 font-roboto text-2xl font-medium">
            <X
              className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-tomato-300"
              onClick={handleSidebar}
            />
            Menu
          </span>
        </div>

        <main className="flex-1 p-6">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={<Search />}
            onChange={(e) => {
              search(e.target.value);
            }}
          />

          <nav>
            <ul className="mt-5 space-y-5">
              {user.isAdmin && (
                <li className="cursor-pointer border-b border-b-light-700 py-3 text-xl hover:text-slate-400">
                  <Link to="/new">Novo prato</Link>
                </li>
              )}
              <li
                onClick={handleSignOut}
                className="cursor-pointer border-b border-b-light-700 py-3 text-xl hover:text-slate-400"
              >
                Sair
              </li>
            </ul>
          </nav>
        </main>
        <footer className="absolute bottom-0 left-0 right-0">
          <Footer />
        </footer>
      </aside>

      {/* Cart Popup */}
      <aside
        className="fixed bottom-0 right-[-110%] top-0 z-20 w-screen bg-dark-400 p-10 transition-all duration-500 md:max-w-[400px] md:p-6"
        id="cartpopup"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <h1>Carrinho</h1>
            <X
              className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-tomato-200"
              onClick={handleCartPopup}
            />
          </div>
          <div className="mt-6 flex-1 space-y-7 overflow-y-auto pr-2">
            {cart && cart.length === 0 ? (
              <span className="text-sm text-zinc-500">
                Você ainda não adicionou nenhum item ao carrinho.
              </span>
            ) : (
              cart.map((dish) => <CartCard data={dish} key={dish.id} />)
            )}
          </div>
          <div>
            <p className="mb-2 mt-8 font-semibold">
              Total: ${cart && cartDishesPrices}
            </p>
            <small className="mb-4 block text-xs text-zinc-500">
              * O frete é calculado de acordo com o endereço informado
            </small>
            <Button
              title={"Checkout"}
              onClick={() => alert("Ainda em desenvolvimento ;D")}
            />
          </div>
        </div>
      </aside>
    </header>
  );
}
