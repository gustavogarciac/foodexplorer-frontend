import { Upload } from "lucide-react";
import { Header } from "../components/Header";
import { TextButton } from "../components/TextButton";
import { Input } from "../components/Input";
import { TagInput } from "../components/TagInput";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { Link } from "react-router-dom";

export function Edit() {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  async function handleUpdateDish() {
    try {
      setLoading(true);
      await api.put(`/dishes/${params.id}`, {
        name,
        category,
        ingredients,
        price: Number(price),
        description,
      });
      alert("Prato atualizado com sucesso!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível atualizar este prato!");
      }
    }
  }

  async function handleDeleteDish() {
    const confirmDeletion = confirm(
      "Você tem certeza que deseja excluir este prato?",
    );
    if (!confirmDeletion) {
      return;
    }
    try {
      await api.delete(`/dishes/${params.id}`);
      alert("Prato deletado com sucesso.");
      navigate("/");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível excluir este prato.");
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

      {user && user.isAdmin ? (
        <form className="flex flex-1 flex-col p-6">
          <TextButton />

          <h1 className="text-3xl font-medium leading-relaxed">Editar prato</h1>

          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="mt-4 flex flex-col gap-2 md:basis-[30%]">
              <label htmlFor="edit-dish-image-input">Imagem do prato</label>
              <label htmlFor="edit-dish-image-input">
                <span className="group flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-dark-900 p-2">
                  <Upload className="transition-all ease-in-out group-hover:scale-125 group-hover:text-tomato-300" />
                  Escolher imagem...
                </span>
                <input
                  type="file"
                  id="edit-dish-image-input"
                  className="hidden"
                />
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-2 md:basis-[35%]">
              <label htmlFor="edit-dish-name">Nome</label>
              <Input
                id="edit-dish-name"
                placeholder="Ex.: Salada Ceasar"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-4 flex flex-col gap-2 md:basis-[35%]">
              <label htmlFor="edit-dish-categories">Categoria</label>
              <select
                id="edit-dish-categories"
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
                      key={String(index)}
                      value={ingredient}
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
              <label htmlFor="edit-dish-price">Preço</label>
              <Input
                placeholder="R$ 00,00"
                id="edit-dish-price"
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="edit-dish-description">Descrição</label>
            <Textarea
              id="edit-dish-description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e sua composição."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mt-6 flex items-center gap-8 md:max-w-[600px]">
            <Button
              type="button"
              title="Excluir prato"
              bgColor="bg-dark-900"
              onClick={handleDeleteDish}
            />
            <Button
              type="button"
              title={loading ? "Salvando alterações... " : "Salvar alterações"}
              onClick={handleUpdateDish}
            />
          </div>
        </form>
      ) : (
        <main className="m-auto flex max-w-[750px] flex-col items-center justify-center gap-8 p-6">
          <h1 className="text-center text-4xl font-bold">
            Você não tem permissão para editar um prato.
          </h1>
          <p className="text-center text-zinc-400">
            Por favor, retorne à página inicial para visualizar o menu, incluir
            pedidos e verificar detalhes.
          </p>
          <Link to="/" className="block max-w-[300px]">
            <Button title="Voltar a página inicial" />
          </Link>
        </main>
      )}

      <Footer />
    </div>
  );
}
