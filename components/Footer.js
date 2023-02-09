import { Input, Navbar } from "reactstrap";
import styles from "../styles/footer-styles/footer.module.scss";
import Logo from "./Logo";
import styles2 from "../styles/header-styles/header.module.scss";
import styles1 from "../styles/header-styles/nav-list.module.scss";
import classNames from "classnames";
import PartnersSlider from "./PartnersSlider";
import { partners } from "../variables/partners";
import NavList from "./NavList";
import { paths } from "../variables/paths";
import { socials } from "../variables/socials";
import SocialList from "./SocialList";
import { cities } from "../variables/cities";

export default function Footer() {
	return (
		<footer className={styles["foot"]}>
			<div className={classNames(styles["foot__container"], "container")}>
				<div className="head-navbar">
					<Navbar
						container={false}
						className="navbar-expand-lg navbar-dark d-flex align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-between px-0 py-0"
					>
						<Logo />
						<div className="d-flex flex-column align-items-center" id="navContent">
							<PartnersSlider partners={partners} />

							<div class="navbar-nav d-none d-lg-flex align-items-center w-100 mt-3">
								<NavList paths={paths} />
								
							</div>
						</div>

						<div class="d-flex flex-column align-items-center align-items-lg-end justify-content-between">
							<h4 class={classNames(styles["foot__contacts-title"], " d-block d-lg-none text-center")}>КОНТАКТЫ</h4>

							<div class={classNames(styles1["head__contacts-list"], " d-flex flex-lg-column align-items-start align-items-lg-end")}>
								<Input type="select" className={classNames(styles2["head__contacts-dropdown"], "text-white")}>
									{cities.map((item) => {
										return (
											<option className={styles1["head__contacts-dropdown-item"]} key={item.city}>
												{item.city}
											</option>
										);
									})}
								</Input>

								<div class="head__contacts-phone text-right">
									<a
										class="foot__contacts-link text-white font-weight-bold"
										href="
                                    tel:+79094455000"
									>
										8 (909) 44-55-000
									</a>
									<p class="foot__contacts-addr text-white">ул. Энгельса 84, офис 44</p>
								</div>
							</div>

							<div class={classNames(styles["foot__social-list"], " d-flex align-items-center")}>
								<div class={styles["foot__social-item"]}>
									<a href="mailto:info@m4r.ru" class={styles["foot__social-link"]}>
										info@m4r.ru
									</a>
								</div>
								<SocialList socialList={socials} />
								
							</div>
						</div>
					</Navbar>
				</div>
			</div>
		</footer>
	);
}


