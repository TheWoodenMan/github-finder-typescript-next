import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
	return (
		<div className="flex flex-col justify-between h-screen">
			<Navbar navTitle="Github Finder" />
			<main className="container mx-auto px-3 pb-12"></main>
			<Footer />
		</div>
	);
}
