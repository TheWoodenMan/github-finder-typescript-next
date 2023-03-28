import React from "react";
import Page from "@/components/layout/Page";
import UserResults from "@/components/users/UserResults";

const Home = () => {
	return (
		<Page title="Home">
			<>
				{/* Search Component */}
				<UserResults />
			</>
		</Page>
	);
};

export default Home;
