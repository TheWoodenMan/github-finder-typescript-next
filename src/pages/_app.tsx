import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { GithubProvider } from "@/context/github/GithubContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<GithubProvider>
				<Component {...pageProps} />
			</GithubProvider>
		</React.Fragment>
	);
}
