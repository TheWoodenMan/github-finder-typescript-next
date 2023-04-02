import React from "react";
import { useContext } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";
import { User } from "./UserResultsTypes";
import GithubContext from "@/context/github/GithubContext";

const UserResults: React.FC = () => {
	const githubUserContext = useContext(GithubContext);

	if (githubUserContext == null) return <div>No Context Found</div>;
	const { users, loading } = githubUserContext;

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users &&
					users.map((user: User, i: number) => (
						<UserItem user={user} key={user.id || i} />
					))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default UserResults;
