import { AlertType } from "@/components/layout/AlertTypes";

export type AlertActionType =
	| { type: "SET_ALERT"; payload: AlertType | null }
	| { type: "REMOVE_ALERT" };
