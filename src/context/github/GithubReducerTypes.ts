import { User } from "../../components/users/UserResultsTypes";
import { Repo } from "@/components/repos/RepoItemTypes";

export type GithubActionType =
	| { type: "GET_USERS"; payload: User[] }
	| { type: "GET_USER"; payload: User }
	| { type: "GET_REPOS"; payload: Repo[] }
	| { type: "SET_LOADING" }
	| { type: "CLEAR_USERS" };
