export interface User {
	login: string;
	id: number;
	avatar_url: string;
	name?: string;
	type?: string;
	location?: string;
	bio?: string;
	blog?: string;
	twitter_username?: string;
	html_url?: string;
	followers?: number;
	following?: number;
	public_repos?: number;
	public_gists?: number;
	hireable?: boolean;
}
