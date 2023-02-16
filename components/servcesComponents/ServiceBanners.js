import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "../../styles/serviceStyles/banners.module.scss";

export default function ServiceBanners({ data }) {
	return (
		<section className={styles["banners"]}>
			<div className={classNames(styles["banners__container"], "container")}>
				<ul className={classNames(styles["banners__list"], "row mx-0")}>
					{data.banners.map((banner, index) => {
						return (
							<li key={index} className={classNames(styles["banners__item"], styles["banner"], "col-12 col-lg-6")}>
								<div className="row mx-0">
									<div
										className={classNames(
											styles["banner__title-block"],
											"col-6 px-0 d-flex flex-column align-items-center justify-content-center"
										)}
										style={{ background: `rgba(${banner.color}, 0.79)` }}
									>
										<h3 className={classNames(styles["banner__title"], "text-center w-75 text-white font-weight-light")}>
											{banner.title}
										</h3>
										<p className={classNames(styles["banner__price"], "text-white font-weight-light")}>{banner.price}</p>
									</div>
									<div className={classNames(styles["banner__image"], "col-6 px-0")}>
										<Image className="w-100 h-100" src={banner.image} alt={banner.title} />
									</div>
								</div>
							</li>
						);
					})}

					{/* <li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: #08415C;"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на плёнке</h3>
								<p className="banner__price text-white font-weight-light">От 420 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/film-print.png" alt="" />
							</div>
						</div>
					</li>
					<li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: #1F1F28;"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на постерной бумаге</h3>
								<p className="banner__price text-white font-weight-light">От 300 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/poster-print.png" alt="" />
							</div>
						</div>
					</li>
					<li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: #592F1D;"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на баннерной сетке</h3>
								<p className="banner__price text-white font-weight-light">От 430 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/grid-banner-print.png" alt="" />
							</div>
						</div>
					</li>
					<li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: rgba(36, 0, 65, 0.79);"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на баннере</h3>
								<p className="banner__price text-white font-weight-light">От 330 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/banner-print.png" alt="" />
							</div>
						</div>
					</li>
					<li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: #08415C;"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на плёнке</h3>
								<p className="banner__price text-white font-weight-light">От 420 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/film-print.png" alt="" />
							</div>
						</div>
					</li>
					<li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: #1F1F28;"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на постерной бумаге</h3>
								<p className="banner__price text-white font-weight-light">От 300 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/poster-print.png" alt="" />
							</div>
						</div>
					</li>
					<li className="col-12 col-lg-6 banners__item banner">
						<div className="row mx-0">
							<div
								className="banner__title-block col-6 px-0 d-flex flex-column align-items-center justify-content-center"
								style="background: #592F1D;"
							>
								<h3 className="banner__title text-center w-75 text-white font-weight-light">Печать на баннерной сетке</h3>
								<p className="banner__price text-white font-weight-light">От 430 руб за кв.м.</p>
							</div>
							<div className="banner__image col-6 px-0">
								<img className="w-100 h-100" src="../assets/images/grid-banner-print.png" alt="" />
							</div>
						</div>
					</li> */}
				</ul>
			</div>
		</section>
	);
}
