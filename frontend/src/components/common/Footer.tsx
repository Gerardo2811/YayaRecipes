"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/general/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-black p-8 md:p-12 rounded-t-lg">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            className="rounded"
            alt="YayaRecipes Logo"
            src={logo}
            height={60}
            width={60}
          />
          <p className="text-sm font-bold">&copy; 2024 YayaRecipes. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces útiles */}
        <ul className="text-sm space-y-2 text-center md:text-left">
          <h3 className="font-bold">Enlaces útiles</h3>
          <li>
            <Link href="/recipes" className="hover:underline">Recetas</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">Acerca de nosotros</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contacto</Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline">Política de privacidad</Link>
          </li>
        </ul>

        {/* Categorías de recetas */}
        <ul className="text-sm space-y-2 text-center md:text-left">
          <h3 className="font-bold">Categorías populares</h3>
          <li>
            <Link href="/categories/desserts" className="hover:underline">Postres</Link>
          </li>
          <li>
            <Link href="/categories/healthy" className="hover:underline">Comida saludable</Link>
          </li>
          <li>
            <Link href="/categories/quick-meals" className="hover:underline">Recetas rápidas</Link>
          </li>
          <li>
            <Link href="/categories/international" className="hover:underline">Recetas internacionales</Link>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm">Síguenos en:</p>
          <div className="flex flex-col space-y-2">
            <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className="text-primary hover:text-black">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-primary hover:text-black">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="text-primary hover:text-black">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" aria-label="Twitter" className="text-primary hover:text-black">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Suscripción al boletín */}
      <div className="mt-8 text-center">
        <p className="text-sm font-bold">Suscríbete a nuestro boletín para recibir las mejores recetas directamente en tu correo.</p>
        <form className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Ingresa tu correo"
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-primary"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90">Suscribirse</button>
        </form>
      </div>
    </footer>
  );
}
