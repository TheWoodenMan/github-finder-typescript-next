import { AlertType } from "@/components/layout/AlertTypes";
import { ReactNode } from "react";
// import { User } from "@/components/users/UserResultsTypes";

export interface AlertContextType {
	alert?: AlertType;
	setAlert: (msg: string, type: string) => void;
}

export interface AlertProviderProps {
	children?: ReactNode;
}
