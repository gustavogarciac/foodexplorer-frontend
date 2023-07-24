export function Button({ type, bgColor, icon: Icon, title, ...rest }) {
  return (
    <button
      type={type}
      className={`flex h-12 w-full items-center justify-center gap-2 rounded-sm ${
        bgColor || "bg-tomato-200"
      } hover:opacity-80`}
      {...rest}
    >
      {Icon && Icon}
      {title}
    </button>
  );
}
