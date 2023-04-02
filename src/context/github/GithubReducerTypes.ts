import { User } from "../../components/users/UserResultsTypes";

export type ActionType =
	| { type: "GET_USERS"; payload: User[] }
	| { type: "SET_LOADING" }
	| { type: "CLEAR_USERS" };
