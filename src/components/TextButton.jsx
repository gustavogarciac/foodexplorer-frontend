import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function TextButton() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-xl transition-all hover:text-zinc-400"
    >
      <ArrowLeft />
      Voltar
    </Link>
  );
}
