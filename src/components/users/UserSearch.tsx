import React from "react";
import { useState, useContext } from "react";
import GithubContext from "@/context/github/GithubContext";
import AlertContext from "@/context/alert/AlertContext";
import { searchUsers } from "@/context/github/GithubActions";

const UserSearch = () => {
	const [text, setText] = useState("");
	const githubSearchContext = useContext(GithubContext);
	const alertSearchContext = useContext(AlertContext);

	if (githubSearchContext == null) return <div>No Context Found</div>;
	const { users, dispatch } = githubSearchContext;

	if (alertSearchContext == null) return <>No Alerts Found</>;
	const { setAlert } = alertSearchContext;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text === "") {
			setAlert("please enter some text", "error");
		} else {
			dispatch({ type: "SET_LOADING" });
			const users = await searchUsers(text).catch((err) => {
				setAlert(err.message, "error");
				throw new Error(err.name);
			});
			dispatch({ type: "GET_USERS", payload: users });
			setText("");
		}
	};

	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
			<div>
				<form action="" onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Search for a user"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users && users.length > 0 && (
				<div>
					<button
						onClick={() => dispatch({ type: "CLEAR_USERS" })}
						className="btn btn-ghost btn-lg"
					>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
