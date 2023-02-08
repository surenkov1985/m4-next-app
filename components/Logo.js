import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/header-styles/logo.module.scss";
import logoImg from "../public/images/logo.svg";

export default function Logo() {
	return (
		<div className={styles["head__navigation-logo"]}>
			<div className="logo w-100">
				<Link href="" className="logo__link navbar-brand w-100">
					<Image className="w-100" width={100} height={100} src={logoImg} alt="logo" />
				</Link>
			</div>
		</div>
	);
}
