import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
	return (
		<div className="flex flex-col justify-between h-screen">
			<Navbar navTitle="Github Finder" />
			<div className="hero">
				<div className="text-center hero-content">
					<div className="max-w-lg">
						<h1 className="text-8xl font-bold mb-8">Ooops!</h1>
						<p className="text-5xl mb-8">404 - Page not found!</p>
						<Link href={"/"} className="btn bt-primary btn-lg">
							<FaHome className="mr-2" />
							Back to Home
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
