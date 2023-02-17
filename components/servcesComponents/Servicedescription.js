import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "../../styles/serviceStyles/description.module.scss";

export default function ServiceDescription({ data }) {
	return (
		<section className={styles["signboards__description"]}>
			<div className={classNames(styles["signboards__description-container"], "container")}>
				{data.gallery && (
					<ul className={classNames(styles["signboards__images"], "row mx-0")}>
						{data?.gallery?.map((item, index) => {
							return (
								<li key={index} className={classNames(styles["banner"], styles["banners__item"], "col-6 col-lg-3")}>
									<div className="">
										<Image className="w-100 h-100" src={item} alt="" />
									</div>
								</li>
							);
						})}
					</ul>
				)}
				<div className={styles["signboards__description-content"]}>
					<h3 className={classNames(styles["signboards__description-title"], "text-center w-75 mx-auto my-0")}>{data.title}</h3>
					<ul className={classNames(styles["signboards__description-text-list"], "row mx-0 justify-content-center")}>
						{data.text &&
							data.text.map((item, index) => {
								return (
									<li key={index} className={classNames(styles["banners__item"], styles["banner"], "col-12 col-lg-6")}>
										<p className={styles["signboards__description-text"]}>{item}</p>
									</li>
								);
							})}
						{data.list &&
							data.list.map((item, index) => {
								return (
									<li key={item.title} className={classNames(styles["causes__item"], "col-12 col-lg-5 col-xl-4 d-flex")}>
										<div className={classNames(styles["causes__item-num"], "text-right")}>{index + 1}</div>
										<div className={styles["causes__item-text"]}>
											<h4 className={styles["causes__item-title"]}>{item.title}</h4>
											<p className={classNames(styles["causes__item-desc"], "font-weight-light")}>{item.text}</p>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</section>
	);
}
