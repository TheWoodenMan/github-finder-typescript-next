import { User } from "../../components/users/UserResultsTypes";

export type ActionType =
	| { type: "GET_USERS"; payload: User[] }
	| { type: "SET_LOADING" };

const githubReducer = (state: any, action: ActionType) => {
	// state is any for now, update when better defined
	switch (action.type) {
		case "GET_USERS":
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};

export default githubReducer;
