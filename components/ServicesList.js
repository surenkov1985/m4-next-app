import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/advertion-production.module.scss";

export default function ServicesList({ servicesData }) {
	return (
		
			

			<section
				id={servicesData.id}
				className={classNames(styles["advertion-production"], styles[servicesData.theme], styles[servicesData.textTheme])}
			>
				<div className={classNames(styles["advertion-production__container"], "container ")}>
					<div className={classNames(styles["advertion-production__list"], "row", servicesData.direction, styles[servicesData.direction])}>
						{servicesData.title && (
							<div className="col-12 col-lg-6 d-flex align-items-center">
								<div className={classNames(styles["advertion-production__title"], "mb-4 mb-lg-0")}>
									<h2 className={classNames(styles["title"], styles[servicesData.titleSize], "my-0 text-uppercase")}>
										{servicesData.title}
									</h2>
								</div>
							</div>
						)}

						{servicesData.list.map((item) => {
							return (
								<div key={item.alt} className="col-6 col-md-4 col-lg-3">
									<div className={styles["advertion-production__item"]}>
										<Image src={item.image} alt={item.alt} />
										<Link
											href={item.path}
											className={classNames(
												styles["advertion-production__item-bg"],
												"text-decoration-none d-flex flex-column align-items-center align-items-md-end justify-content-end"
											)}
											style={{ background: item.color }}
										>
											{item.logo && (
												<div className={styles["advertion-production__item-icon"]}>
													<img src={item.logo} alt="" />
												</div>
											)}
											<div className={styles["advertion-production__item-content"]}>
												<h4
													className={classNames(
														styles["advertion-production__item-title"],
														"text-center text-md-right font-weight-light"
													)}
												>
													{item.text}
												</h4>
												<p
													className={classNames(
														styles["advertion-production__item-price"],
														"text-white text-center text-md-right"
													)}
												>
													{item.price}
												</p>
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
	);
}
