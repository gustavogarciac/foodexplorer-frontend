export function Button(props) {
  return (
    <button className="flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-tomato-200 hover:bg-tomato-100">
      {props.icon && props.icon}
      {props.title}
    </button>
  );
}
