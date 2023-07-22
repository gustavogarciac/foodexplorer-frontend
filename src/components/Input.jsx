export function Input({ icon: Icon, ...rest }) {
  return (
    <div className="group flex items-center rounded-sm bg-dark-900 pl-2">
      <span className="text-zinc-500">{Icon && Icon}</span>
      <input
        {...rest}
        className="peer w-full bg-transparent p-2 outline-none placeholder:text-zinc-500"
      />
    </div>
  );
}
