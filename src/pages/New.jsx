import { Upload } from "lucide-react";
import { Header } from "../components/Header";
import { TextButton } from "../components/TextButton";
import { Input } from "../components/Input";
import { TagInput } from "../components/TagInput";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

export function New() {
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
            <Input id="new-dish-name" placeholder="Ex.: Salada Ceasar" />
          </div>

          <div className="mt-4 flex flex-col gap-2 md:basis-[35%]">
            <label htmlFor="new-dish-categories">Categoria</label>
            <select
              id="new-dish-categories"
              defaultValue={"default"}
              className="placeholder: rounded-sm bg-dark-900 p-2"
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
              <TagInput value="Pão Naan" />
              <TagInput placeholder="Adicionar" isNew />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 md:basis-1/4">
            <label htmlFor="new-dish-price">Preço</label>
            <Input placeholder="R$ 00,00" />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="new-dish-description">Descrição</label>
          <Textarea
            id="new-dish-description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e sua composição."
          />
        </div>

        <div className="mt-6 md:max-w-[300px]">
          <Button type="button" title="Salvar alterações" />
        </div>
      </form>

      <Footer />
    </div>
  );
}
