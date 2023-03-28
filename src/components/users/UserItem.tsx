import React from "react";

import Image from "next/image";
import { UserItemPropTypes } from "./UserResults";
import Link from "next/link";
import github_mark from "src/components/layout/assets/github-mark.png";

const UserItem: React.FC<UserItemPropTypes> = ({
	user: { login, avatar_url }
}) => {
	console.log(github_mark);
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
					<Link
						className="text-base-content text-opacity-40"
						href={`/users/${login}`}
					>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
