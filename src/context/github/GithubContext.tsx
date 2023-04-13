import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { GithubContextType } from "./GithubContextTypes";
import { GithubProviderProps } from "./GithubContextTypes";
import { GithubActionType } from "./GithubReducerTypes";

const GithubContext = createContext<GithubContextType | null>(null);

export const GithubProvider = ({ children }: GithubProviderProps) => {
	const initialState = {
		users: [{}],
		user: {},
		repos: [{}],
		loading: false
	};

	const [state, dispatch] = useReducer<
		(state: any, action: GithubActionType) => any
	>(githubReducer, initialState);

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
