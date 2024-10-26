"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../assets/general/logo.png";
import { FaHome, FaQuestion, FaRegistered, FaUserCircle } from "react-icons/fa";
import { IoDocument, IoLogIn } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { isUserLoggedIn } from "../../utils/api/authFetch"; // Importa la función de verificación

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable
  const [isLogin, setIsLogin] = useState(false); // Estado para verificar si el usuario está logueado

  useEffect(() => {
    const loggedIn = isUserLoggedIn(); // Verifica si el usuario está logueado
    setIsLogin(loggedIn);
  }, []);

  return (
    <nav className="bg-secondary md:py-4 px-0 pt-0 rounded-b-lg md:flex md:items-center">
      {/* Logo */}
      <div className={`flex justify-between items-center px-2 py-2 ${isOpen ? "bg-primary " : "bg-secondary "}`}>
        <Link href="/" aria-label="YayaRecipes Home">
          <Image
            className="block mr-4"
            alt="YayaRecipes Logo"
            src={logo}
            height={50}
            width={50}
          />
        </Link>
        <GiHamburgerMenu
          className="md:hidden text-black mr-2"
          onClick={() => setIsOpen(!isOpen)} // Toggle el menú desplegable
          size={30}
        />
      </div>

      {/* Links del menú */}
      <ul className={`${isOpen ? "block" : "hidden"} md:flex space-y-2 md:space-y-0 md:space-x-8 text-black mt-4 md:mt-0 p-2`}>
        <li>
          <Link href="/" className="hover:text-primary">
            <div className="flex space-x-10 m-4">
              <FaHome className="mr-2" size={20} />
              Inicio
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-primary">
            <div className="flex space-x-10 m-4">
              <FaQuestion className="mr-2" size={20} />
              Acerca de
            </div>
          </Link>
        </li>
        <li>
          <Link href="/recipes" className="hover:text-primary">
            <div className="flex space-x-10 m-4">
              <IoDocument className="mr-2" size={20} />
              Recetas
            </div>
          </Link>
        </li>
      </ul>

      {/* Links de usuario */}
      {
            isLogin ? (
              <FaUserCircle className="ml-auto mr-4 text-black" size={50} />
            ) : (
      <ul className={`${isOpen ? "block" : "hidden"} md:flex space-y-2 md:space-y-0 md:space-x-6 text-black ml-auto mt-4 md:mt-0 p-2`}>
        <li>
          <Link href="/auth/register" className="hover:text-primary">
            <div className="flex space-x-10 m-4">
              <FaRegistered className="mr-2" size={20} />
              Registrarse
            </div>
          </Link>
        </li>
        <li>
          
              <Link href="/auth/login" className="hover:text-primary">
                <div className="flex space-x-10 m-4">
                  <IoLogIn className="mr-2" size={25} />
                  Iniciar sesión
                </div>
              </Link>
          
        </li>
      </ul>
        )
      }
    </nav>
  );
}
