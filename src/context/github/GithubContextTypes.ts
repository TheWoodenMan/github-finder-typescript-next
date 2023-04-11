import { ReactNode } from "react";
import { User } from "@/components/users/UserResultsTypes";
import { Repo } from "@/components/repos/RepoItemTypes";

export interface GithubContextType {
	users: User[] | undefined;
	loading: boolean | undefined;
	user: User;
	repos: Repo[];
	searchUsers: (text: string) => Promise<void>;
	getUser: (login: string) => Promise<void>;
	getUserRepos: (login: string) => Promise<void>;
	clearUsers: () => void;
}

export interface GithubProviderProps {
	children: ReactNode;
}
