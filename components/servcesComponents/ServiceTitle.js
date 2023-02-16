import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "../../styles/serviceStyles/title.module.scss";

export default function ServiceTitle({ title, text, icon }) {
	return (
		<section className={styles["widescreen__title"]}>
			<div className={classNames(styles["widescreen__title-container"], "container")}>
				<div className="row mx-0">
					<div className=" col-12 col-xl-6 d-flex align-items-center px-4">
						<div className={styles["widescreen__title-icon"]}>
							<Image src={icon} alt={title} />
						</div>
						<div className={styles["line"]}></div>
						<h1 className={classNames(styles["title"], "text-white font-weight-bold w-75 my-0 text-uppercase")}>{title}</h1>
					</div>
					<div className="col-12 col-xl-6 align-items-center d-flex font-weight-normal px-2">
						<p className={classNames(styles["description"], "text-white my-0")}>{text}</p>
					</div>
				</div>
			</div>
		</section>
	);
}