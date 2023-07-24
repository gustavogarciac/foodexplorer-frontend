import { Plus, X } from "lucide-react";

export function TagInput({ isNew, value, onClick, ...rest }) {
  return (
    <div
      className={`flex w-fit items-center rounded-md px-3 ${
        isNew ? "border border-dashed border-zinc-400" : "bg-light-600"
      }`}
    >
      <input
        type="text"
        readOnly={!isNew}
        value={value}
        {...rest}
        className={`max-w-[100px] bg-transparent capitalize text-zinc-200 outline-none`}
      />

      <button type="button" onClick={onClick}>
        {isNew ? (
          <Plus className="transition-all ease-in-out hover:scale-125 hover:text-green-600" />
        ) : (
          <X className="transition-all ease-in-out hover:scale-125 hover:text-red-600" />
        )}
      </button>
    </div>
  );
}
