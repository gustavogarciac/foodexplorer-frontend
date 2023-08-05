import { Plus, Minus } from "lucide-react";

export function Counter({ quantity, setQuantity }) {
  function handleAddCounter(quantity) {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    } else {
      alert("Você pode incluir, no máximo, 50 pratos.");
    }
  }

  function handleMinusCounter(quantity) {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="flex cursor-pointer items-center justify-center gap-3 text-lg font-medium md:text-2xl">
      <Plus
        className="transition-all hover:scale-125 hover:text-green-700"
        onClick={() => handleAddCounter(quantity)}
      />
      <span className="cursor-default">{quantity}</span>
      <Minus
        className="transition-all hover:scale-125 hover:text-tomato-300"
        onClick={() => handleMinusCounter(quantity)}
      />
    </div>
  );
}
