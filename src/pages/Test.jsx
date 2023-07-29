import { useEffect, useState } from "react";

export function Test() {
  const [name, setName] = useState("");

  const formData = new FormData();
  formData.append("name", name);

  function handleFormSubmmit() {
    return console.log(formData);
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleFormSubmmit}>
        Clicar
      </button>
    </form>
  );
}
