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
								<div className={classNames(styles["banner__row"], "row mx-0 h-100")}>
									<div
										className={classNames(
											styles["banner__title-block"],
											"col-6 px-0 d-flex flex-column align-items-center justify-content-center p-2"
										)}
										style={{ background: `rgb(${banner.color})` }}
									>
										<h3 className={classNames(styles["banner__title"], "text-center w-75 text-white font-weight-light")}>
											{banner.title}<br/>{banner.subtitle && <small>{banner.subtitle}</small>}
										</h3>
										<p className={classNames(styles["banner__price"], "text-white font-weight-light text-center ")}>
											{banner.price}
										</p>
										{banner.button && (
											<div className={classNames(styles["banner__control"], "w-75 d-flex justify-content-center")}>
												{banner.time && <span class="text-white font-weight-light">Печать за 1 день!</span>}
												<button
													className={classNames(
														styles["banner__btn"],
														"btn rounded-pill btn-sm btn-outline-light text-white w-100 mt-auto"
													)}
												>
													ЗАКАЗАТЬ
												</button>
											</div>
										)}
									</div>
									<div className={classNames(styles["banner__image"], "col-6 px-0")}>
										<Image className="w-100 h-100" src={banner.image} alt={banner.title} />
									</div>
									{banner.description && (
										<div
											className={classNames(styles["banner__bg"], "d-flex flex-column")}
											style={{ background: `rgba(${banner.color}, 0.79)` }}
										>
											{banner.description.map((text, index) => {
												return (
													<p key={index} className={styles["banner__bg-text"]}>
														{text}
													</p>
												);
											})}
										</div>
									)}
								</div>
							</li>
						);
					})}
				</ul>
				{data.bannersDescription && (
					<div className={classNames(styles["banners__description"], "row ml-0")}>
						{data.bannersDescription.map((item, index) => {
							return (
								<div key={index} className={classNames(styles["terms__col"], item.colSize, "col-12 d-flex flex-column")}>
									{item.icon && <Image src={item.icon} alt={item.alt} />}
									{item.circle && (
										<div
											className={classNames(
												styles["terms__icon"],
												"rounded-circle d-flex align-items-center justify-content-center position-relative"
											)}
										>
											<h4 className={classNames(styles["terms__icon-text"], "text-center text-uppercase mb-0")}>
												пр
												<br /> и<br /> ме
												<br />
												<small className="font-weight-bold text-lowercase">нение</small>
											</h4>
											<h
												className={classNames(styles["terms__icon-text"], "text-center position-absolute")}
												style={{ right: "14%" }}
											>
												?
											</h>
										</div>
									)}
									{item.title && (
										<h3
											className={classNames(
												styles["banners__description-title"],
												"font-weight-bold text-uppercase text-center text-md-left"
											)}
										>
											{item.title}
										</h3>
									)}
									{item.text &&
										item?.text?.map((text, index) => {
											return (
												<p
													key={index}
													className={classNames(styles["banners__description-text"], "text-center text-md-left mt-0")}
												>
													{text}
												</p>
											);
										})}
									{item.button && (
										<div
											className={classNames(
												styles["terms__control"],
												"d-flex align-items-center justify-content-center justify-content-md-start"
											)}
										>
											<button
												className={classNames(styles["terms__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}
											>
												{item.button}
											</button>
											{item.controlText && (
												<p className={classNames(styles["terms__control-text"], "text-center my-0")}>{item.controlText}</p>
											)}
										</div>
									)}
									{item.list && (
										<ul className={classNames(styles["banners__description-list"], "d-flex flex-column")}>
											{item.list.map((listItem, index) => {
												return (
													<li key={index} className={classNames(styles["banners__description-item"])}>
														<span className={classNames(styles["banners__description-item-title"], "text-uppercase")}>
															{listItem.title}
														</span>
														<br />
														<span className={classNames(styles["banners__description-item-text"])}>{listItem.text}</span>
													</li>
												);
											})}
										</ul>
									)}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
}
