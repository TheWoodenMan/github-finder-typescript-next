import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { GithubProvider } from "@/context/github/GithubContext";
import { AlertProvider } from "@/context/alert/AlertContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<GithubProvider>
				<AlertProvider>
					<Component {...pageProps} />
				</AlertProvider>
			</GithubProvider>
		</React.Fragment>
	);
}
