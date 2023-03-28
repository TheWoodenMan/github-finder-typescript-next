import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";

export interface User {
	login: string;
	id: number;
	avatar_url: string;
}

export interface UserItemPropTypes {
	user: User;
}

const UserResults: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_GITHUB_URL}/users`,
			{
				headers: {
					Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
				}
			}
		);
		const data = await response.json();
		console.log(data);
		setUsers(data);
		setLoading(false);
	};

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user, i) => (
					<UserItem user={user} key={user.id || i} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default UserResults;
