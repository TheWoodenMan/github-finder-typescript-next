import React from "react";
import { useContext } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";
import { User } from "./UserResultsTypes";
import GithubContext from "@/context/github/GithubContext";

const UserResults: React.FC = () => {
	const { users, loading } = useContext(GithubContext);

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user: User, i: number) => (
					<UserItem user={user} key={user.id || i} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default UserResults;
