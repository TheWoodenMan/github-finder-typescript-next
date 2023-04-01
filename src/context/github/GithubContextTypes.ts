import { ReactNode } from "react";
import { User } from "@/components/users/UserResultsTypes";

export type GithubContextProps = {
	users?: User[] | {}[] | undefined;
	loading?: boolean | undefined;
	searchUsers: (text: string) => Promise<void>;
};

export type GithubProviderProps = {
	children?: ReactNode | undefined;
};
