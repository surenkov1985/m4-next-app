import React from "react";
import styles from "../styles/footer-styles/footer.module.scss";
import styles1 from "../styles/header-styles/nav-list.module.scss";
import classNames from "classnames";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function PartnersSlider({ partners }) {
	const [sliderRef] = useKeenSlider(
		{
			breakpoints: {
				"(min-width: 320px)": {
					slides: { perView: 2, spacing: 10 },
				},
				"(min-width: 550px)": {
					slides: { perView: 3, spacing: 10 },
				},
				"(min-width: 768px)": {
					slides: { perView: 4, spacing: 10 },
				},
				"(min-width: 991px)": {
					slides: { perView: 4, spacing: 10 },
				},
				"(min-width: 1200px)": {
					slides: { perView: 5, spacing: 10 },
				},
			},
			loop: true,
			slides: { perView: 2, spacing: 10 },
			slideChanged() {
				console.log("slide changed");
			},
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 3000);
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		]
	);

	return (
		<div ref={sliderRef} className={classNames(styles["swiper"], "navbar-nav d-flex align-items-center justify-content-center swiper")}>
			<ul className={classNames(styles["foot__navigation-partners"], "d-flex w-100 align-items-center flex-row swiper-wrapper")}>
				{partners.map((partner) => {
					return (
						<li
							key={partner.name}
							className={classNames(
								styles1["head__navigation-item"],
								"keen-slider__slide nav-item swiper-slide d-flex justify-content-center"
							)}
							style={{ minWidth: "120px!important", maxWidth: "120px" }}
						>
							<a href={partner.path} className={classNames(styles1["link"], "text-center link")}>
								<Image src={partner.image} alt="partner-logo" style={{ width: "100%" }} />
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
