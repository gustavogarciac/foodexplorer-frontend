import { Upload } from "lucide-react";
import { Header } from "../components/Header";
import { TextButton } from "../components/TextButton";
import { Input } from "../components/Input";
import { TagInput } from "../components/TagInput";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

import { api } from "../services/api";
import { useState } from "react";

export function New() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  async function handleNewDish() {
    try {
      setLoading(true);
      await api.post("/dishes", {
        name,
        category,
        ingredients,
        price: Number(price),
        description,
      });
      alert("Prato criado com sucesso!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível criar este prato!");
      }
    }
  }

  function handleAddIngredients() {
    if (newIngredient.length === 0) {
      return alert("Preencha o nome do ingrediente!");
    }

    if (ingredients.length > 10) {
      return alert("Você só pode indicar, no máximo, 10 ingredientes!");
    }
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    );
  }

  return (
    <div className="max-w-screen flex h-screen flex-col justify-between">
      <Header />

      <form className="flex flex-1 flex-col p-6">
        <TextButton />

        <h1 className="text-3xl font-medium leading-relaxed">Novo Prato</h1>

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="mt-4 flex flex-col gap-2 md:basis-[30%]">
            <label htmlFor="new-dish-image-input">Imagem do prato</label>
            <label htmlFor="new-dish-image-input">
              <span className="group flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-dark-900 p-2">
                <Upload className="transition-all ease-in-out group-hover:scale-125 group-hover:text-tomato-300" />
                Escolher imagem...
              </span>
              <input type="file" id="new-dish-image-input" className="hidden" />
            </label>
          </div>

          <div className="mt-4 flex flex-col gap-2 md:basis-[35%]">
            <label htmlFor="new-dish-name">Nome</label>
            <Input
              id="new-dish-name"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-4 flex flex-col gap-2 md:basis-[35%]">
            <label htmlFor="new-dish-categories">Categoria</label>
            <select
              id="new-dish-categories"
              defaultValue={"default"}
              className="placeholder: rounded-sm bg-dark-900 p-2"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="dishes">Pratos</option>
              <option value="drinks">Bebidas</option>
              <option value="dessert">Sobremesas</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="mt-4 flex flex-col gap-2 md:basis-3/4">
            <span>Ingredientes</span>
            <div className="flex flex-wrap gap-2 rounded-sm bg-dark-900 p-2">
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <TagInput
                    value={ingredient}
                    key={String(index)}
                    onClick={() => {
                      handleRemoveIngredient(ingredient);
                    }}
                  />
                ))}
              <TagInput
                placeholder="Adicionar"
                isNew
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredients}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 md:basis-1/4">
            <label htmlFor="new-dish-price">Preço</label>
            <Input
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="new-dish-description">Descrição</label>
          <Textarea
            id="new-dish-description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e sua composição."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mt-6 md:max-w-[300px]">
          <Button
            type="button"
            title={loading ? "Criando prato..." : "Salvar alterações"}
            onClick={handleNewDish}
          />
        </div>
      </form>

      <Footer />
    </div>
  );
}
