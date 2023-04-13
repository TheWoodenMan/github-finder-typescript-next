import React from "react";
import { RepoListPropTypes } from "./RepoListTypes";
import RepoItem from "./RepoItem";
import { useContext } from "react";
import { Repo } from "./RepoItemTypes";
import Spinner from "../Spinner";
import GithubContext from "@/context/github/GithubContext";

const RepoList = ({ repos }: RepoListPropTypes) => {
	const githubUserContext = useContext(GithubContext);

	if (githubUserContext == null) return <div>No Context Found</div>;
	const { loading } = githubUserContext;

	if (loading) {
		return <Spinner />;
	} else if (repos[0].name) {
		return (
			<React.Fragment>
				<div className="rounded-lg shadow-lg card bg-base-100">
					<div className="card-body">
						<h2 className="text-3xl my-4 font-bold card-title">
							Latest Repositories
						</h2>
						{repos &&
							repos.map((repo: Repo, i: number) => (
								<RepoItem key={repo.id || i} repo={repo} />
							))}
					</div>
				</div>
			</React.Fragment>
		);
	} else {
		return <></>;
	}
};

export default RepoList;
