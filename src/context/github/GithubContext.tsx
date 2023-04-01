import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

import { text } from "stream/consumers";
import { ActionType } from "./GithubReducer";
import { GithubContextProps } from "./GithubContextTypes";
import { GithubProviderProps } from "./GithubContextTypes";

import github_mark from "src/components/layout/assets/github-mark.png";

const GithubContext = createContext<GithubContextProps | undefined>(undefined);

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const GithubProvider = ({ children }: GithubProviderProps) => {
	const initialState = {
		users: [
			{
				login: "Github User",
				id: 0,
				avatar_url: github_mark.src
			}
		],
		loading: false
	};

	const [state, dispatch] = useReducer<(state: any, action: ActionType) => any>(
		githubReducer,
		initialState
	);
	// const [users, setUsers] = useState<User[]>([]);
	// const [loading, setLoading] = useState(true);

	const searchUsers = async (text: string) => {
		setLoading();

		const params = new URLSearchParams({
			q: text
		});

		const response = await fetch(
			`${GITHUB_URL}/search/users?${params} in:name`,
			{
				headers: {
					Authorization: `${GITHUB_TOKEN}`
				}
			}
		);
		const { items } = await response.json();

		dispatch({
			type: "GET_USERS",
			payload: items
		});
	};

	const setLoading = () => dispatch({ type: "SET_LOADING" });

	return (
		<GithubContext.Provider
			value={{ users: state.users, loading: state.loading, searchUsers }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
