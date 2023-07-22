import Logo from "../assets/logo.svg";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between bg-dark-700 px-4 py-2 sm:flex-row sm:px-6 sm:py-4 md:px-[120px]">
      <img
        src={Logo}
        alt="Logo FoodExplorer"
        className="max-w-[150px] sm:max-w-[200px]"
      />

      <span className="sm:text-md text-sm text-slate-300">
        © 2023 - Todos os direitos reservados.
      </span>
    </footer>
  );
}
