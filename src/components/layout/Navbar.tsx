import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { NavbarProps } from "./NavbarTypes";
import { useRouter } from "next/router";
import GithubContext from "@/context/github/GithubContext";

const Navbar: React.FC<NavbarProps> = ({ navTitle }) => {
	const router = useRouter();

	const githubSearchContext = useContext(GithubContext);
	if (githubSearchContext == null) return <div>No Context Found</div>;
	const { dispatch } = githubSearchContext;

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		dispatch({ type: "CLEAR_USERS" });
		router.push({
			pathname: "/"
		});
	};

	return (
		<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
			<div className="container mx-auto">
				<div className="flex-none px-2 mx-2">
					<FaGithub className="inline pr-2 text-3xl" />
					<a
						onClick={handleClick}
						style={{ cursor: "pointer" }}
						className="text-lg font-bold align-middle"
					>
						{navTitle}
					</a>
				</div>
				<div className="flex-1 px-2 mx-2">
					<div className="flex justify-end">
						<a
							onClick={handleClick}
							style={{ cursor: "pointer" }}
							className="btn btn-ghost btn-sm rounded-btn"
						>
							Home
						</a>
						<Link href={"/About"} className="btn btn-ghost btn-sm rounded-btn">
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	navTitle: "Github Finder"
};

export default Navbar;
