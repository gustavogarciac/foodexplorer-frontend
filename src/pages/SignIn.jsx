import { useState } from "react";
import logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/auth";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn() {
    try {
      setLoading(true);
      signIn({ email, password });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível realizar o log-in.");
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
          Faça login
        </h1>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="login-email">Email</label>
          <Input
            id="login-email"
            type="email"
            placeholder="Insira seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label htmlFor="login-password">Senha</label>
          <Input
            id="login-password"
            type="password"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="h-12 w-full rounded-sm bg-tomato-200 hover:bg-tomato-100"
          onClick={handleSignIn}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <Link
          to="/register"
          className="block text-center text-sm text-light-200 transition-colors hover:text-light-400"
        >
          Criar uma conta
        </Link>
      </div>
    </div>
  );
}
