import AuthDynamic from "../../components/auth/AuthlayoutDynamic";
import { layout } from "@/utils/types/types";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AuthLayout({ children }: layout) {
  return (
    <div className="h-screen flex">
      {/* Flecha visible en pantallas grandes */}
      <Link href={'/'} className="hidden lg:block ">
        <FaArrowLeft className="m-6 text-primary" size={30} />
      </Link>

      {/* Sección izquierda - Oculta en dispositivos móviles */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-backgroundAuthColumn2">
        <AuthDynamic />
      </div>

      {/* Sección derecha - Siempre visible */}
      <div className="w-full lg:w-1/2 lg:flex flex flex-col items-center justify-center bg-white relative">
        {/* Flecha visible solo en dispositivos móviles */}
        <Link href={'/'} className="absolute top-4 left-4 lg:hidden">
          <FaArrowLeft className="text-primary" size={30} />
        </Link>

        {/* Contenido del lado derecho */}
        {children}
      </div>
    </div>
  );
}
