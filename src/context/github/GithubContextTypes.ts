import { ReactNode } from "react";
import { User } from "@/components/users/UserResultsTypes";

export interface GithubContextType {
	users: User[] | undefined;
	loading: boolean | undefined;
	user: User;
	searchUsers: (text: string) => Promise<void>;
	getUser: (login: string) => Promise<void>;
	clearUsers: () => void;
}

export interface GithubProviderProps {
	children: ReactNode;
}
