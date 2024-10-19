"use client"; // Esto garantiza que el componente se renderice en el cliente

import { useEffect, useState } from "react";
import Image from "next/image";

import loginImage from "../../assets/login/login-image.svg";
import registerImage from "../../assets/register/register-image.svg";
import forgetPasswordImage from "../../assets/forgotPassword/password.svg";

export default function AuthDynamic() {
  const [imageSrc, setImageSrc] = useState(loginImage); // Imagen por defecto
  const [title, setTitle] = useState("¡Bienvenido a YayaRecipes!");
  const [description, setDescription] = useState("Introduzca sus credenciales para acceder a la plataforma.");

  useEffect(() => {
    // Obtenemos la ruta actual desde el cliente (window.location.pathname)
    const pathname = window.location.pathname;

    // Cambiamos la imagen y el texto dependiendo de la ruta
    if (pathname === "/auth/register") {
      setImageSrc(registerImage);
      setTitle("Cree una cuenta en YayaRecipes");
      setDescription("Registre sus datos para comenzar a usar la plataforma.");
    } else if (pathname === "/auth/forget-password") {
      setImageSrc(forgetPasswordImage);
      setTitle("Recupera tu contraseña");
      setDescription("Introduce tu correo electrónico para recibir instrucciones de recuperación.");
    } else if (pathname === "/auth/login") {
      setImageSrc(loginImage);
      setTitle("¡Bienvenido a YayaRecipes!");
      setDescription("Introduzca sus credenciales para acceder a la plataforma.");
    }else {
      setImageSrc("");
      setTitle("");
      setDescription("");
    }
  }, []);

  return (
    <div>
      <Image alt="Imagen" src={imageSrc} height={300} width={500} />
      <h1 className="text-3xl font-bold mb-4 text-black">{title}</h1>
      <p className="text-lg text-black">{description}</p>
    </div>
  );
}
