import Link from "next/link";
import React, { useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import ServicesList from "../../components/ServicesList";
import { serviceTypes } from "../../variables/indexServises";

import stylesMenu from "../../styles/content-menu.module.scss";
import classNames from "classnames";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";

export default function Index() {
	const [isShow, setIsShow] = useState(false);
	const [showClass, setShowClass] = useState("");

	function showToggle() {
		setIsShow(!isShow);
	}
	return (
		<MainLayout>
			<div className={classNames(stylesMenu["menu"], "w-100")}>
				<div
					className={classNames(
						stylesMenu["menu__container"],
						"container d-flex flex-column align-items-center justify-content-between justify-content-lg-center"
					)}
				>
					<Navbar
						id="list-example"
						container={false}
						className={classNames(
							stylesMenu["menu__navigation"],
							"navbar navbar-expand-lg w-100 navbar-dark d-flex flex-column align-items-center px-0 py-0"
						)}
					>
						<div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-center">
							<NavbarToggler
								className={classNames(stylesMenu["menu__contacts-btn"], "navbar-toggler btn btn-toggle ")}
								type="button"
								onClick={showToggle}
							>
								<span>Производство рекламы</span>
								<span>
									<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 1L5 5L1 1" stroke="white" />
									</svg>
								</span>
							</NavbarToggler>
							<h3 className={classNames(stylesMenu["menu__title"], "text-uppercase font-weight-normal my-0 d-block d-lg-none")}>
								услуги
							</h3>
						</div>
						<div className=" d-none d-lg-flex">
							<nav className="collapse list-example navbar-nav navbar-collapse w-100 justify-content-center align-items-baseline sticky-top">
								<Nav
									className={classNames(
										stylesMenu["menu__navigation-list"],
										"nav d-flex w-100 align-items-center flex-column flex-md-row menu__navigation-column "
									)}
								>
									{serviceTypes.map((type) => {
										return (
											<NavItem key={type.id} className={classNames(stylesMenu["menu__navigation-item"])}>
												<NavLink
													href={`#${type.id}`}
													className={classNames(stylesMenu["menu__navigation-link"], "text-center px-2")}
												>
													{type.title}
												</NavLink>
											</NavItem>
										);
									})}
								</Nav>
							</nav>
						</div>
					</Navbar>
					<Collapse
						className={classNames(stylesMenu["menu__content"], "collapse navbar-nav navbar-collapse w-100 ", isShow ? "show" : "")}
						id="menuContent"
						isOpen={isShow}
					>
						<nav className=" w-100 d-flex list-example justify-content-center align-items-baseline sticky-top">
							<Nav
								className={classNames(
									stylesMenu["menu__navigation-list"],
									"nav d-flex w-100 align-items-center flex-column flex-md-row menu__navigation-column "
								)}
							>
								{serviceTypes.map((type) => {
									return (
										<NavItem key={type.id} className={classNames(stylesMenu["menu__navigation-item"])} onClick={showToggle}>
											<NavLink
												href={`#${type.id}`}
												className={classNames(stylesMenu["menu__navigation-link"], "text-center px-2")}
											>
												{type.title}
											</NavLink>
										</NavItem>
									);
								})}
							</Nav>
						</nav>
					</Collapse>
				</div>
			</div>

			{serviceTypes.map((type) => {
				return <ServicesList key={type.id} servicesData={type} />;
			})}
		</MainLayout>
	);
}
