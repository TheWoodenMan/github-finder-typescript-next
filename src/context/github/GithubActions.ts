import axios from "axios";

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `${GITHUB_TOKEN}` }
});

// search for a range of users based on text input
export const searchUsers = async (text: string) => {
	const params = new URLSearchParams({
		q: text
	});
	const response = await github.get(`/search/users?${params}`);

	if (response.status === 200 || response.status === 304) {
		return response.data.items;
	} else {
		return 
	}
	
};

// get a single user and repos

export const getUserAndRepos = async (login: string) => {
	const [user, repos] = await Promise.all([
		github.get(`/users/${login}`),
		github.get(`/users/${login}/repos?per_page=10&sort=updated`)
	]);
	return { user: user.data, repos: repos.data };
};
