import { User } from "../../components/users/UserResultsTypes";
import { Repo } from "@/components/repos/RepoItemTypes";

export type GithubActionType =
	| { type: "GET_USERS"; payload: User[] }
	| { type: "GET_USER_AND_REPOS"; payload: { user: User[]; repos: Repo[] } }
	| { type: "SET_LOADING" }
	| { type: "CLEAR_USERS" };
