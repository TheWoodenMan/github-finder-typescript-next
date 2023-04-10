import { AlertType } from "@/components/layout/AlertTypes";
import { ReactNode } from "react";

export interface AlertContextType {
	alert?: AlertType;
	setAlert: (msg: string, type: string) => void;
}

export interface AlertProviderProps {
	children?: ReactNode;
}
