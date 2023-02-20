import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

export function MainLayout({ children }) {
	const router = useRouter();

	console.log(router);
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>M4.ru</title>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
