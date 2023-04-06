import { User } from "../../components/users/UserResultsTypes";

export type GithubActionType =
	| { type: "GET_USERS"; payload: User[] }
	| { type: "SET_LOADING" }
	| { type: "CLEAR_USERS" };
