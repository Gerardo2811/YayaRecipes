import aboutImage1 from "../../assets/about/aboutImage1.svg";
import mision from "../../assets/about/mision.svg";
import vision from "../../assets/about/vision.svg";
import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="p-8 bg-third text-black grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Columna izquierda */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Acerca de Nosotros</h2>
        <Image
          className="block m-auto"
          alt="YayaRecipes Logo"
          src={aboutImage1}
          height={350}
          width={350}
        />
        <p className="mb-4">
          Bienvenido a <strong>YayaRecipes</strong>, tu lugar de confianza para
          encontrar recetas deliciosas y sencillas para todos los gustos.
          Nuestro objetivo es hacer que cocinar en casa sea fácil, divertido y
          accesible para todos, sin importar tu nivel de experiencia en la
          cocina.
        </p>
        <p className="mb-4">
          Este sitio nació de nuestra pasión por la cocina casera y el deseo de
          compartir recetas que no solo son deliciosas, sino también prácticas.
          Ya sea que estés buscando una comida rápida para una noche ocupada o
          un platillo elaborado para una ocasión especial, aquí encontrarás
          recetas que se adaptan a tu estilo de vida.
        </p>
        <p className="mb-4">
          En <strong>YayaRecipes</strong>, creemos que cocinar es una forma de
          expresión creativa y una manera de reunir a las personas. Estamos
          comprometidos con el uso de ingredientes frescos y saludables, y
          ofrecemos una amplia variedad de opciones, desde comidas vegetarianas
          hasta platos indulgentes para los amantes del sabor.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Únete a la Comunidad</h2>
        <p>
          ¡Explora nuestras recetas, comparte tus platillos favoritos y
          conviértete en parte de nuestra comunidad de cocineros apasionados! No
          importa si eres un principiante o un chef experimentado, siempre hay
          algo nuevo por aprender y disfrutar en <strong>YayaRecipes</strong>.
        </p>
      </div>

      {/* Columna derecha */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Nuestra Misión</h2>
        <Image
          className="block m-auto"
          alt="Misión de YayaRecipes"
          src={mision}
          height={350}
          width={350}
        />
        <p className="mb-4">
          Nuestra misión es inspirarte a descubrir el amor por la cocina casera
          y a experimentar con nuevas recetas que alimenten tanto el cuerpo como
          el alma. Queremos ser tu fuente de inspiración diaria para todas tus
          necesidades culinarias.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Nuestra Visión</h2>
        <Image
          className="block m-auto"
          alt="Visión de YayaRecipes"
          src={vision}
          height={350}
          width={350}
        />
        <p className="mb-4">
          Nuestra visión es convertirnos en la comunidad de referencia para
          quienes aman la cocina casera, donde la creatividad y la pasión por la
          buena comida se compartan y celebren todos los días. Creemos que la
          cocina es una herramienta poderosa para conectar personas y culturas,
          y estamos comprometidos con la construcción de un espacio donde cada
          receta cuente una historia y cada plato sea una obra de arte.
        </p>
      </div>
    </section>
  );
}
