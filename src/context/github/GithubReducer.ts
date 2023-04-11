import github_mark from "src/components/layout/assets/github-mark.png";
import { GithubActionType } from "./GithubReducerTypes";
const placeholder_url: string = github_mark.src;

const githubReducer = (state: any, action: GithubActionType) => {
	// state is any for now, update when better defined
	switch (action.type) {
		case "GET_USERS":
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case "GET_USER":
			return {
				...state,
				user: action.payload,
				loading: false
			};
		case "GET_REPOS":
			return {
				...state,
				repos: action.payload,
				loading: false
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true
			};
		case "CLEAR_USERS":
			return {
				...state,
				users: [
					{
						login: "Github User",
						id: 0,
						avatar_url: placeholder_url
					}
				],
				loading: false
			};
		default:
			return state;
	}
};

export default githubReducer;
