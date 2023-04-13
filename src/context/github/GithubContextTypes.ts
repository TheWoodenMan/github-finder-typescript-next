import { ReactNode } from "react";
import { User } from "@/components/users/UserResultsTypes";
import { Repo } from "@/components/repos/RepoItemTypes";

export interface GithubContextType {
	users: User[];
	loading: boolean;
	user: User;
	repos: Repo[];
	dispatch: Dispatch;
}

export type Dispatch = (obj: { type: string; payload?: any }) => void;

export interface GithubProviderProps {
	children: ReactNode;
}
