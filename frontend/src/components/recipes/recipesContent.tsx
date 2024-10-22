"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RecipesContent() {
  // Arreglo con 10 recetas de ejemplo, cada una con una categoría
  const recipes = [
    {
      id: 1,
      title: "Tarta de Manzana",
      description: "Una deliciosa tarta casera con manzanas frescas.",
      category: "Postres",
      imageUrl: "/path/to/tarta-de-manzana.jpg",
    },
    {
      id: 2,
      title: "Pizza Margarita",
      description: "Pizza clásica con tomate, mozzarella y albahaca.",
      category: "Comida rápida",
      imageUrl: "/path/to/pizza-margarita.jpg",
    },
    {
      id: 3,
      title: "Paella de Mariscos",
      description: "Paella española con mariscos frescos y arroz.",
      category: "Plato principal",
      imageUrl: "/path/to/paella.jpg",
    },
    {
      id: 4,
      title: "Ensalada César",
      description: "Ensalada con pollo, lechuga romana y aderezo César.",
      category: "Ensaladas",
      imageUrl: "/path/to/ensalada-cesar.jpg",
    },
    {
      id: 5,
      title: "Brownies de Chocolate",
      description: "Brownies caseros con un intenso sabor a chocolate.",
      category: "Postres",
      imageUrl: "/path/to/brownies.jpg",
    },
    {
      id: 6,
      title: "Sushi Variado",
      description: "Una selección de sushi variado con diferentes pescados.",
      category: "Plato principal",
      imageUrl: "/path/to/sushi.jpg",
    },
    {
      id: 7,
      title: "Pollo al Curry",
      description: "Pollo al curry con arroz basmati.",
      category: "Plato principal",
      imageUrl: "/path/to/pollo-curry.jpg",
    },
    {
      id: 8,
      title: "Hamburguesa Clásica",
      description: "Hamburguesa con carne de res, lechuga y tomate.",
      category: "Comida rápida",
      imageUrl: "/path/to/hamburguesa.jpg",
    },
    {
      id: 9,
      title: "Spaghetti Bolognese",
      description: "Spaghetti con una rica salsa de carne Bolognesa.",
      category: "Plato principal",
      imageUrl: "/path/to/spaghetti.jpg",
    },
    {
      id: 10,
      title: "Tacos al Pastor",
      description: "Tacos con cerdo adobado y piña asada.",
      category: "Comida rápida",
      imageUrl: "/path/to/tacos.jpg",
    },
  ];

  // Estado para la búsqueda y la categoría
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todas"); // Nueva categoría
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 5;

  // Filtrar recetas según el término de búsqueda y la categoría seleccionada
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      category === "Todas" || recipe.category === category;
    const matchesSearchTerm = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // Lógica para calcular el índice de recetas a mostrar
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  // Cambiar de página
  const paginate = (pageNumber : number) => setCurrentPage(pageNumber);

  return (
    <section className="p-8 text-black bg-third">
      {/* Input de búsqueda y selector de categoría */}
      <h1 className="mt-4 mb-4">Busqueda por nombre y categoría</h1>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Búsqueda por nombre */}
        
        <input
          type="text"
          placeholder="Buscar receta..."
          className="px-4 py-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Selector de categoría */}

        <select
          className="px-4 py-2 border rounded w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Postres">Postres</option>
          <option value="Comida rápida">Comida rápida</option>
          <option value="Plato principal">Plato principal</option>
          <option value="Ensaladas">Ensaladas</option>
        </select>
      </div>

      {/* Renderizado de las recetas en formato pequeño */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            {/* Imagen pequeña de la receta */}
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              width={300}
              height={200}
              className="rounded-t-lg"
            />

            {/* Información de la receta */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {recipe.description.slice(0, 50)}...
              </p>

              {/* Botón para ver receta */}
              <Link href={`/recipes/${recipe.id}`}>
                <button className="px-3 py-1 bg-primary text-white text-sm rounded">
                  Ver receta
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center space-x-4 mt-8">
        {Array.from({
          length: Math.ceil(filteredRecipes.length / recipesPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-black"
            } rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
