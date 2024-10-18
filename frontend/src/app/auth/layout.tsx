import AuthDynamic from "../../components/auth/authlayoutDynamic"
import { layout } from "@/utils/types/types";
export default function AuthLayout({ children } : layout) {
    return (
      <div className="h-screen flex">
        {/* Sección izquierda */}
        <div className="w-1/2 flex items-center justify-center bg-backgroundAuthColumn2">
            <AuthDynamic></AuthDynamic>
        </div>
  
        {/* Sección derecha */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          {children}
        </div>
      </div>
    );
  }
  