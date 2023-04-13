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
	return response.data.items;

	// const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
	// 	headers: {
	// 		Authorization: `${GITHUB_TOKEN}`
	// 	}
	// });
	// const { items } = await response.json();
	// return items;
};

// get a single user and repos

export const getUserAndRepos = async (login: string) => {
	const [user, repos] = await Promise.all([
		github.get(`/users/${login}`),
		github.get(`/users/${login}/repos`)
	]);
	return { user: user.data, repos: repos.data };
};
// export const getUser = async (login: string) => {
// 	const response = await fetch(`${GITHUB_URL}/users/${login}`, {
// 		headers: {
// 			Authorization: `${GITHUB_TOKEN}`
// 		}
// 	});

// 	if (response.status === 200) {
// 		const data = await response.json();
// 		return data;
// 	}
// };

// // get search results for target user repos
// export const getUserRepos = async (login: string) => {
// 	const params = new URLSearchParams({
// 		sort: "created",
// 		per_page: "10"
// 	});

// 	const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
// 		headers: {
// 			Authorization: `${GITHUB_TOKEN}`
// 		}
// 	});
// 	const data = await response.json();
// 	return data;
// };
