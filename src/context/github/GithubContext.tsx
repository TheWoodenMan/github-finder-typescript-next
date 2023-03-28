import { createContext, useState } from "react";

import { User } from "@/components/users/UserResults";
import { ReactNode } from "react";

interface GithubContextType {
	users: User[];
	loading: boolean;
}

const GithubContext = createContext<GithubContextType | undefined>(undefined);

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_URL;

interface GithubProviderProps {
	children?: ReactNode | undefined;
}

export const GithubProvider = ({ children }: GithubProviderProps) => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchUsers = async () => {
		const response = await fetch(`${GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`
			}
		});
		const data = await response.json();
		console.log("using context", data);
		setUsers(data);
		setLoading(false);
	};

	return (
		<GithubContext.Provider value={{ users, loading }}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
