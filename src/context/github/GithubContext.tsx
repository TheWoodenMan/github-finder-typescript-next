import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { GithubContextType } from "./GithubContextTypes";
import { GithubProviderProps } from "./GithubContextTypes";
import { GithubActionType } from "./GithubReducerTypes";

import github_mark from "src/components/layout/assets/github-mark.png";

const GithubContext = createContext<GithubContextType | null>(null);

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
		user: {},
		loading: false
	};

	const [state, dispatch] = useReducer<
		(state: any, action: GithubActionType) => any
	>(githubReducer, initialState);

	const searchUsers = async (text: string) => {
		setLoading();

		const params = new URLSearchParams({
			q: text
		});

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `${GITHUB_TOKEN}`
			}
		});
		const { items } = await response.json();

		dispatch({
			type: "GET_USERS",
			payload: items
		});
	};

	// get a single user
	const getUser = async (login: string) => {
		setLoading();

		const response = await fetch(`${GITHUB_URL}/users/${login}`, {
			headers: {
				Authorization: `${GITHUB_TOKEN}`
			}
		});

		if (response.status === 200) {
			const data = await response.json();

			dispatch({
				type: "GET_USER",
				payload: data
			});
		}
	};
	const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

	const setLoading = () => dispatch({ type: "SET_LOADING" });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				searchUsers,
				getUser,
				clearUsers
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
