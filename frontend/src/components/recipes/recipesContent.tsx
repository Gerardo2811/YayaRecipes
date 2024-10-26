"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { isUserLoggedIn } from "../../utils/api/authFetch";

export default function RecipesContent() {
  // Recetas de ejemplo
  const recipes = [
    { id: 1, title: "Tarta de Manzana", description: "Una deliciosa tarta casera con manzanas frescas.", category: "Postres", imageUrl: "/path/to/tarta-de-manzana.jpg" },
    { id: 2, title: "Pizza Margarita", description: "Pizza clásica con tomate, mozzarella y albahaca.", category: "Comida rápida", imageUrl: "/path/to/pizza-margarita.jpg" },
    { id: 3, title: "Paella de Mariscos", description: "Paella española con mariscos frescos y arroz.", category: "Plato principal", imageUrl: "/path/to/paella.jpg" },
    { id: 4, title: "Ensalada César", description: "Ensalada con pollo, lechuga romana y aderezo César.", category: "Ensaladas", imageUrl: "/path/to/ensalada-cesar.jpg" },
    { id: 5, title: "Brownies de Chocolate", description: "Brownies caseros con un intenso sabor a chocolate.", category: "Postres", imageUrl: "/path/to/brownies.jpg" },
    { id: 6, title: "Sushi Variado", description: "Una selección de sushi variado con diferentes pescados.", category: "Plato principal", imageUrl: "/path/to/sushi.jpg" },
    { id: 7, title: "Pollo al Curry", description: "Pollo al curry con arroz basmati.", category: "Plato principal", imageUrl: "/path/to/pollo-curry.jpg" },
    { id: 8, title: "Hamburguesa Clásica", description: "Hamburguesa con carne de res, lechuga y tomate.", category: "Comida rápida", imageUrl: "/path/to/hamburguesa.jpg" },
    { id: 9, title: "Spaghetti Bolognese", description: "Spaghetti con una rica salsa de carne Bolognesa.", category: "Plato principal", imageUrl: "/path/to/spaghetti.jpg" },
    { id: 10, title: "Tacos al Pastor", description: "Tacos con cerdo adobado y piña asada.", category: "Comida rápida", imageUrl: "/path/to/tacos.jpg" },
  ];

  // Estados para búsqueda, categoría y autenticación
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  const recipesPerPage = 5;

  useEffect(() => {
    const loggedIn = isUserLoggedIn(); // Verifica si el usuario está logueado
    setIsLogin(loggedIn);
  }, []);

  // Filtrar recetas según búsqueda y categoría
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = category === "Todas" || recipe.category === category;
    const matchesSearchTerm = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const currentRecipes = filteredRecipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Renderizar el formulario de búsqueda
  const renderSearchForm = () => (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      

      {/* Búsqueda por nombre */}
      <input
        type="text"
        placeholder="Buscar receta..."
        className="px-4 py-2 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Selector de categoría */}
      <select
        className="px-4 py-2 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Todas">Todas las categorías</option>
        <option value="Postres">Postres</option>
        <option value="Comida rápida">Comida rápida</option>
        <option value="Plato principal">Plato principal</option>
        <option value="Ensaladas">Ensaladas</option>
      </select>
      {/* Mostrar botón de "Agregar Receta" si está logueado */}
      {isLogin && (
        <button
          type="button"
          className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition w-1/2"
        >
          Agregar Receta
        </button>
      )}
    </div>
  );

  return (
    <section className="p-8 text-black bg-third">
      <h1 className="mt-4 mb-4">Búsqueda por nombre y categoría</h1>

      {/* Formulario de búsqueda */}
      {renderSearchForm()}

      {/* Renderizado de las recetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              width={300}
              height={200}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{recipe.description.slice(0, 50)}...</p>
              <Link href={`/recipes/${recipe.id}`}>
                <button className="px-3 py-1 bg-primary text-white text-sm rounded">Ver receta</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center space-x-4 mt-8">
        {Array.from({ length: Math.ceil(filteredRecipes.length / recipesPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-200 text-black"} rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
