// No necesitamos "use client" aquí, ya que estamos en un entorno de servidor

export default function RecipePage({ params }) {
  const { id } = params; // Obtenemos los parámetros dinámicos directamente de 'params'

  // Ejemplo simple para manejar los IDs de recetas
  if (id === "1") {
    return (
      <div className="p-8 bg-white text-black">
        <h1 className="text-3xl font-bold mb-4">Tarta de Manzana</h1>
        <p>Una deliciosa tarta casera con manzanas frescas.</p>
      </div>
    );
  }

  if (id === "2") {
    return (
      <div className="p-8 bg-white text-black">
        <h1 className="text-3xl font-bold mb-4">Pizza Margarita</h1>
        <p>Pizza clásica con tomate, mozzarella y albahaca.</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">Receta no encontrada</h1>
      <p>No se pudo encontrar la receta solicitada.</p>
    </div>
  );
}
