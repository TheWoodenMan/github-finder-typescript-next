import { ReactNode } from "react";
import { User } from "@/components/users/UserResultsTypes";
import { Repo } from "@/components/repos/RepoItemTypes";

export interface GithubContextType {
	users: User[] | undefined;
	loading: boolean | undefined;
	user: User;
	repos: Repo[];
	dispatch: Dispatch;
	getUser: (login: string) => Promise<void>;
	getUserRepos: (login: string) => Promise<void>;
	clearUsers: () => void;
}

export type Dispatch = (obj: { type: string; payload?: any }) => void;

export interface GithubProviderProps {
	children: ReactNode;
}
