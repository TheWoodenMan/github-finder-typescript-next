import { AlertActionType } from "./AlertReducerTypes";

const alertReducer = (state: any, action: AlertActionType) => {
	switch (action.type) {
		case "SET_ALERT":
			return action.payload;
		case "REMOVE_ALERT":
			return null;
		default:
			return state;
	}
};

export default alertReducer;
