import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "./Alert";
import AlertContext from "@/context/alert/AlertContext";
import { AlertType } from "./AlertTypes";
import { useContext } from "react";

type PageProps = {
	title: string;
	children: JSX.Element | JSX.Element[];
};

const Page: React.FC<PageProps> = ({ title, children }) => {
	const alertContextType = useContext(AlertContext);
	const alert = alertContextType!.alert || false;

	return (
		<div>
			<Navbar navTitle="Github Finder" />
			<main className="container mx-auto px-3 pb-12">
				{alert && <Alert />}
				<h1>{title}</h1>
				{children}
			</main>
			<Footer />
		</div>
	);
};
export default Page;
