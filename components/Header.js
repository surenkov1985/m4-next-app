import Logo from "./Logo";
import { paths } from "../variables/paths";
import NavList from "./NavList";
import SocialList from "./SocialList";
import { socials } from "../variables/socials";
import styles from "../styles/header-styles/header.module.scss";
import { cities } from "../variables/cities";
import classNames from "classnames";
import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Input } from "reactstrap";
import phoneIcon from "../public/images/phone.svg";
import Image from "next/image";

export default function Header() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	function navbarToggle() {
		setIsCollapsed(!isCollapsed);
	}
	return (
		<header className="head sticky-top">
			<div className={styles["head__contacts"]}>
				<div
					className={classNames(
						styles["head__contacts-container"],
						"container d-none d-lg-flex align-items-center justify-content-between"
					)}
				>
					<SocialList socialList={socials} />
					<div className={classNames(styles["head__contacts-list"], "d-flex align-items-center")}>
						<div className="dropdown head__contacts-dropdown">
							<Input type="select" className={classNames(styles["head__contacts-dropdown"], "text-white")}>
								{cities.map((item) => {
									return (
										<option className={styles["head__contacts-dropdown-item"]} key={item.city}>
											{item.city}
										</option>
									);
								})}
							</Input>
						</div>

						<div className="head__contacts-phone">
							<a className="head__contacts-link text-white " href="tel:+79094455000">
								<small>8 (909) 44-55-000</small>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles["head__menu"]}>
				<div className="container py-3">
					<div className="head-navbar">
						<Navbar
							container={false}
							className="navbar-expand-lg navbar-dark d-flex align-items-center flex-row-reverse flex-lg-row justify-content-between px-0 py-0"
						>
							<div className="head__navigation-phone d-flex d-lg-none">
								<a href="tel:+79094455000">
									<Image src={phoneIcon} width={22} height={22} alt="" />
								</a>
							</div>
							<Logo />
							<NavbarToggler className="navbar-toggler" type="button" onClick={navbarToggle}>
								<span className="toggler-icon">
									<svg width="17px" height="16px">
										<path
											fillRule="evenodd"
											fill="#EBA707"
											d="M-0.000,-0.000 L17.000,-0.000 L17.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
										/>
										<path
											fillRule="evenodd"
											fill="#EBA707"
											d="M-0.000,7.000 L17.000,7.000 L17.000,9.000 L-0.000,9.000 L-0.000,7.000 Z"
										/>
										<path
											fillRule="evenodd"
											fill="#EBA707"
											d="M-0.000,14.000 L17.000,14.000 L17.000,16.000 L-0.000,16.000 L-0.000,14.000 Z"
										/>
									</svg>
								</span>
							</NavbarToggler>
							<div className="d-none d-lg-flex">
								<div className="collapse navbar-collapse w-100 align-items-baseline">
									<div className="navbar-nav d-flex ml-auto align-items-center justify-content-center ">
										<NavList paths={paths} />
									</div>
								</div>
							</div>
						</Navbar>
						<Collapse isOpen={!isCollapsed} className="collapse navbar-collapse w-100 align-items-baseline nav-content" id="navContent">
							<div className="navbar-nav d-flex ml-auto align-items-center justify-content-center ">
								<NavList paths={paths} />
							</div>
						</Collapse>
					</div>
				</div>
			</div>
		</header>
	);
}
