import { Plus, Minus } from "lucide-react";

export function Counter() {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-3 text-lg font-medium md:text-2xl">
      <Plus className="transition-all hover:scale-125 hover:text-green-700" />
      <span className="cursor-default">01</span>
      <Minus className="transition-all hover:scale-125 hover:text-tomato-300" />
    </div>
  );
}
