import { ReactNode } from "react"; 

export interface layout {
    children: ReactNode;
}

export interface NavbarProps {
    isLogin: boolean;
}