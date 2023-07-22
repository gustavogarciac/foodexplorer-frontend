import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/logoMobile.svg";
import { LogOut, Menu, Receipt, Search, X } from "lucide-react";
import { Input } from "./Input";
import { Footer } from "./Footer";

export function Header({ search }) {
  function handleSignOut() {
    return;
  }

  function handleSidebar() {
    const sidebar = document.querySelector("#sidebar");

    sidebar.classList.toggle("left-[-100%]");
    sidebar.classList.toggle("left-0");
  }
  const admin = true;
  return (
    <header className="flex items-center justify-between gap-16 bg-dark-600 p-6 sm:px-6 sm:py-4 md:px-[120px] md:py-6">
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
        <Input icon={<Search />} />
      </div>

      <div className="flex items-center space-x-6">
        {admin ? (
          <Link
            to="/new"
            className="hidden max-w-fit items-center rounded-md bg-red-600 p-2 sm:grid"
          >
            <span>Novo Prato</span>
          </Link>
        ) : (
          <button className="flex max-w-fit items-center justify-center gap-2 rounded-md bg-tomato-200 p-2 transition-colors hover:bg-tomato-100">
            <Receipt />
            <span className="hidden sm:flex">Pedidos (0)</span>
          </button>
        )}

        <button className="bg-transparent">
          <LogOut className="hidden sm:block" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className="fixed bottom-0 left-[-100%] top-0 w-screen bg-dark-400 transition-all duration-500 md:hidden"
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
          />

          <nav>
            <ul className="mt-5 space-y-5">
              {admin && (
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
    </header>
  );
}
