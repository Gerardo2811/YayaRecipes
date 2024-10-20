import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
        <h1 className="text-4xl font-bold">Descubre las mejores recetas para cualquier ocasión</h1>
        <p className="text-xl mt-4">Fáciles, rápidas y deliciosas.</p>
        <input 
          type="text" 
          placeholder="Buscar recetas..." 
          className="mt-6 p-2 w-2/3 md:w-1/3 text-black rounded-md"
        />
        <Link href="/recipes">
          <button className="bg-primary text-white px-4 py-2 mt-4 rounded hover:bg-opacity-90">
            Ver todas las recetas
          </button>
        </Link>
      </section>

      {/* Categorías populares */}
      <section className="mt-12 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Categorías populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="bg-gray-100 p-4 rounded">
            <Image
              src="/images/desserts.jpg"
              alt="Postres"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Postres</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <Image
              src="/images/healthy.jpg"
              alt="Comida saludable"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Comida saludable</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <Image
              src="/images/quick-meals.jpg"
              alt="Recetas rápidas"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Recetas rápidas</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <Image
              src="/images/international.jpg"
              alt="Recetas internacionales"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Recetas internacionales</h3>
          </div>
        </div>
      </section>

      {/* Recetas destacadas */}
      <section className="mt-12 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Recetas destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md rounded p-4">
            <Image
              src="/images/featured-recipe1.jpg"
              alt="Tarta de chocolate"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Tarta de chocolate</h3>
            <p className="text-sm mt-2">Una receta deliciosa para los amantes del chocolate.</p>
            <Link href="/recipe/1">
              <button className="bg-primary text-white px-4 py-2 mt-4 rounded hover:bg-opacity-90">
                Ver receta
              </button>
            </Link>
          </div>
          {/* Otras recetas destacadas */}
        </div>
      </section>

      {/* Suscripción al boletín */}
      <section className="mt-16 bg-gray-200 py-8 text-center">
        <h2 className="text-2xl font-bold">Suscríbete a nuestro boletín</h2>
        <p className="mt-2">Recibe nuestras mejores recetas directamente en tu correo.</p>
        <form className="mt-4 flex justify-center">
          <input 
            type="email" 
            placeholder="Ingresa tu correo" 
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90">
            Suscribirse
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
