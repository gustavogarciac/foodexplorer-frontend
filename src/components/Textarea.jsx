export function Textarea({ ...rest }) {
  return (
    <textarea
      {...rest}
      className="h-[120px] w-full resize-none appearance-none rounded-sm bg-dark-900 p-2 outline-none md:h-[120px]"
    />
  );
}
