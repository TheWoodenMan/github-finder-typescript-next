import React from "react";
import { UserItemPropTypes } from "./UserItemTypes";
import { useRouter } from "next/router";

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
	return avatar_url ? (
		<React.Fragment>
			<div className="card shadow-md compact side bg-base-100">
				<div className="flex-row items-center space-x-4 card-body">
					<div>
						<div className="avatar">
							<div className="rounded-full shadow w-14 h-14">
								<picture>
									<img
										src={avatar_url}
										width={100}
										height={100}
										alt={`Avatar Image for ${login}`}
									/>
								</picture>
							</div>
						</div>
					</div>
					<div>
						<h2 className="card-title">{login}</h2>
						<a
							className="text-base-content text-opacity-40"
							onClick={handleClick}
							style={{ cursor: "pointer" }}
						>
							Visit Profile
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	) : (
		<></>
	);
};

export default UserItem;
