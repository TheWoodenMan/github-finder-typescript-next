import React from "react";
import { UserItemPropTypes } from "./UserItemTypes";
import { useRouter } from "next/router";
import github_mark from "src/components/layout/assets/github-mark.png";

const UserItem: React.FC<UserItemPropTypes> = ({
	user: { login, avatar_url }
}) => {
	const router = useRouter();
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		router.push({
			pathname: "user",
			query: { pid: login }
		});
	};

	return (
		<div className="card shadow-md compact side bg-base-100">
			<div className="flex-row items-center space-x-4 card-body">
				<div>
					<div className="avatar">
						<div className="rounded-full shadow w-14 h-14">
							{avatar_url ? (
								<picture>
									<img
										src={avatar_url}
										width={100}
										height={100}
										alt={`Avatar Image for ${login}`}
									/>
								</picture>
							) : (
								<picture>
									<img
										src={github_mark.src}
										width={100}
										height={100}
										alt={`Placeholder Image`}
									/>
								</picture>
							)}
						</div>
					</div>
				</div>
				<div>
					<h2 className="card-title">{login || "GitHub User"}</h2>
					<abbr
						className="text-base-content text-opacity-40"
						onClick={handleClick}
						style={{ cursor: "pointer" }}
					>
						Visit Profile
					</abbr>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
