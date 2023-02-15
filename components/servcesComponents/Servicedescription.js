import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "../../styles/serviceStyles/description.module.scss";

export default function ServiceDescription({ data }) {
	return (
		<section className={styles["signboards__description"]}>
			<div className={classNames(styles["signboards__description-container"], "container")}>
				{data.gallery && <ul className={classNames(styles["signboards__images"], "row mx-0")}>
					{data?.gallery?.map((item) => {
						return (
							<li className={classNames(styles["banner"], styles["banners__item"], "col-6 col-lg-3")}>
								<div className="">
									<Image className="w-100 h-100" src={item} alt="" />
								</div>
							</li>
						);
					})}
				</ul>}
				<div className={styles["signboards__description-content"]}>
					<h3 className={classNames(styles["signboards__description-title"], "text-center w-75 mx-auto my-0")}>{data.title}</h3>
					<ul className={classNames(styles["signboards__description-text-list"], "row mx-0")}>
						{data.text.map((item) => {
							return (
								<li className={classNames(styles["banners__item"], styles["banner"], "col-12 col-lg-6")}>
									<p className={styles["signboards__description-text"]}>{item}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}
