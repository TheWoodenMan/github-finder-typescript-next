import { ReactNode } from "react";
import { User } from "@/components/users/UserResultsTypes";

export interface GithubContextProps {
	users: User[] | undefined;
	loading: boolean | undefined;
	searchUsers: (text: string) => Promise<void>;
	clearUsers: () => void;
}

export interface GithubProviderProps {
	children?: ReactNode | undefined;
}
