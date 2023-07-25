export function Tag({ name, ...rest }) {
  return (
    <span className="rounded-md bg-dark-1000 p-2 lowercase" {...rest}>
      {name}
    </span>
  );
}
