export interface Repo {
	name: string;
	description: string;
	id: number;
	html_url: string;
	forks: number;
	open_issues: number;
	watchers_count: number;
	stargazers_count: number;
}

export interface RepoItemProps {
	repo: Repo;
}
