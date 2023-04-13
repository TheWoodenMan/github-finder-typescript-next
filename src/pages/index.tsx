import { Inter } from "next/font/google";
import Page from "@/components/layout/Page";
const inter = Inter({ subsets: ["latin"] });
import UserSearch from "@/components/users/UserSearch";
import UserResults from "@/components/users/UserResults";

export default function Index() {
	return (
		<div className="flex flex-col justify-between h-screen">
			<Page title="">
				<main className="container mx-auto px-3 pb-12">
					<UserSearch />
					<UserResults />
				</main>
			</Page>
		</div>
	);
}
