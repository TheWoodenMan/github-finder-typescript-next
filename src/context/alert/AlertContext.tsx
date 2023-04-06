import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
import { AlertProviderProps } from "./AlertContextTypes";
import { AlertContextType } from "./AlertContextTypes";

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider = ({ children }: AlertProviderProps) => {
	const initialState = null;

	const [state, dispatch] = useReducer(alertReducer, initialState);

	// set an alert

	const setAlert = (msg: string, type: string) => {
		dispatch({
			type: "SET_ALERT",
			payload: { msg, type }
		});

		setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
	};

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
