import { useState } from "react";
import logo from "../assets/logo.svg";
import { Input } from "../components/Input";

import { Link, useNavigate } from "react-router-dom";

import { api } from "../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp() {
    try {
      setLoading(true);
      await api.post("/users", { name, email, password });
      setLoading(false);
      alert("Usuário cadastrado com sucesso.");
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível se cadastrar.");
      }
    }
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-evenly">
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="register-email">Email</label>
          <Input
            id="register-email"
            type="email"
            placeholder="exemplo@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="register-password">Senha</label>
          <Input
            id="register-password"
            type="password"
            placeholder="No mínimo 8 caracteres."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="h-12 w-full rounded-sm bg-tomato-200 hover:bg-tomato-100"
          onClick={handleSignUp}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
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
