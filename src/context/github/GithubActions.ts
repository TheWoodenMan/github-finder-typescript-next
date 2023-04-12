const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// search for a range of users based on text input
export const searchUsers = async (text: string) => {
	const params = new URLSearchParams({
		q: text
	});

	const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
		headers: {
			Authorization: `${GITHUB_TOKEN}`
		}
	});
	const { items } = await response.json();

	return items;
};
