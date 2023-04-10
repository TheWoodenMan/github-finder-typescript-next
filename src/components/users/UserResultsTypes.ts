export interface User {
	login: string | null;
	id: number | null;
	avatar_url: string | null;
	name?: string | null;
	type?: string | null;
	location?: string | null;
	bio?: string | null;
	blog?: string | null;
	twitter_username?: string | null;
	html_url?: string | null;
	followers?: number | null;
	following?: number | null;
	public_repos?: number | null;
	public_gists?: number | null;
	hireable: boolean | null;
}
