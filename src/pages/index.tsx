import Head from "next/head";
import Image from "next/image";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import About from "./About";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
	return (
		<div className="flex flex-col justify-between h-screen">
			<Navbar heading="Github Finder" />
			<main className="container mx-auto px-3 pb-12"></main>
			<Footer />
		</div>
	);
}
