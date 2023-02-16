import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { indexServices } from "../../variables/indexServises";
import styles from "../../styles/advertion-production.module.scss";

import "swiper/css";
import "swiper/css/grid";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import SwiperCore, { Grid, Navigation } from "swiper";

export default function ServicesSlider() {

	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<section className={classNames(styles["advertion-production__slider"], "d-flex justify-content-center")}>
			<div className={classNames(styles["advertion-production__slider-container"], "container row mx-0 flex-row-reverse flex-lg-row")}>
				<Swiper
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.params.navigation.nextEl = navigationNextRef.current;
					}}
					modules={[Grid, Navigation]}
					slidesPerView={2}
					slidesPerGroup={2}
					grid={{
						rows: 2,
						fill: "column",
					}}
					spaceBetween={7}
					breakpoints={{
						768: {
							slidesPerView: 3,
							slidesPerGroup: 3,
							grid: {
								rows: 1,
								fill: "row",
							},
							spaceBetween: 20,
						},
					}}
					className={classNames("swiper", styles["servicesSwiper"], "col-12 col-lg-9 order-last order-lg-first mt-4 mt-lg-0")}
				>
					{indexServices?.map((item) => {
						return (
							<SwiperSlide key={item.alt} className={styles["swiper-slide"]}>
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
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div
					className={classNames(
						styles["slider__control"],
						"swiper-navigation position-relative col-12 col-lg-3 order-first order-lg-last mt-4 mt-lg-0 d-flex flex-column justify-content-end align-items-center align-items-lg-start"
					)}
				>
					<h3 className={classNames(styles["slider__title"], "font-weight-bold text-center text-lg-left mt-auto")}>Ещё услуги</h3>
					<div className={classNames(styles["slider__control-block"], "w-100 d-flex align-items-center justify-content-between mt-3")}>
						<div className={classNames(styles["slider__button"], styles["slider__button-prev"], "text-center")} ref={navigationPrevRef}>
							<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M28 7L1.00022 7.12943" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path
									d="M7.125 13.25L1 7.125L7.125 1"
									stroke="#6D6D6D"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="ml-2">Предыдущие</span>
						</div>
						<div className={classNames(styles["slider__button"], styles["slider__button-next"], "text-center")} ref={navigationNextRef}>
							<span className="mr-2">Следующие</span>
							<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.25L27.9998 7.12057" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path
									d="M21.875 1L28 7.125L21.875 13.25"
									stroke="#6D6D6D"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
