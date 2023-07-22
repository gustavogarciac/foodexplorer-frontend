import logo from "../assets/logo.svg";
import { Input } from "../components/Input";

import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="flex h-screen w-screen items-center justify-evenly">
      <div className="hidden md:flex">
        <img src={logo} alt="Logo Food Explorer" />
      </div>
      <div className="max-w-[350px] space-y-10 rounded-md p-5 md:w-[400px] md:bg-dark-700 md:p-10">
        <div className="md:hidden">
          <img src={logo} alt="Logo Food Explorer" />
        </div>

        <h1 className="hidden font-poppins text-4xl font-bold md:flex">
          Crie sua conta
        </h1>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="register-name">Seu nome</label>
          <Input
            id="register-name"
            type="text"
            placeholder="Seu nome completo"
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="register-email">Email</label>
          <Input
            id="register-email"
            type="email"
            placeholder="exemplo@email.com"
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="register-password">Senha</label>
          <Input
            id="register-password"
            type="password"
            placeholder="No mínimo 8 caracteres."
          />
        </div>

        <button className="h-12 w-full rounded-sm bg-tomato-200 hover:bg-tomato-100">
          Entrar
        </button>
        <Link
          to={-1}
          className="block text-center text-sm text-light-200 transition-colors hover:text-light-400"
        >
          Já tenho uma conta
        </Link>
      </div>
    </div>
  );
}
