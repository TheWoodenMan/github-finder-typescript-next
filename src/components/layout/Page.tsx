import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageProps = {
	title: string;
	children?: JSX.Element | JSX.Element[];
};

const Page: React.FC<PageProps> = ({ title, children }) => (
	<div>
		<Navbar heading="Github Finder" />
		<main className="container mx-auto px-3 pb-12">
			<h1>{title}</h1>
			{children}
		</main>
		<Footer />
	</div>
);

export default Page;
