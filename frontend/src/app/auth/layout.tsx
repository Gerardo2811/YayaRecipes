import AuthDynamic from "../../components/auth/AuthlayoutDynamic";
import { layout } from "@/utils/types/types";

export default function AuthLayout({ children }: layout) {
  return (
    <div className="h-screen flex">
      {/* Sección izquierda - Oculta en dispositivos móviles */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-backgroundAuthColumn2">
        <AuthDynamic />
      </div>

      {/* Sección derecha - Siempre visible */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        {children}
      </div>
    </div>
  );
}
