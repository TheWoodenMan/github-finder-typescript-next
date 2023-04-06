import React from "react";
import Page from "@/components/layout/Page";
import UserResults from "@/components/users/UserResults";
import UserSearch from "@/components/users/UserSearch";

const Home = () => {
	return (
		<Page title="">
			<UserSearch />
			<UserResults />
		</Page>
	);
};

export default Home;
