import Link from "next/link";
import React from "react";
import { MainLayout } from "../../components/MainLayout";


export default function Index() {
	return (
		<MainLayout>
			<Link href="/services/flyers">flyers</Link>
		</MainLayout>
	);
}
