import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "../../styles/serviceStyles/title.module.scss";

export default function ServiceTitle({ title, text, icon, subTitle, id }) {
	return (
		<section className={classNames(styles["widescreen__title"], styles[id])} id={id}>
			<div className={classNames(styles["widescreen__title-container"], "container")}>
				<div className="row mx-0">
					<div className=" col-12 col-xl-6 d-flex align-items-center px-4">
						<div className={styles["widescreen__title-icon"]}>
							<Image src={icon} alt={title} />
						</div>
						<div className={styles["line"]}></div>
						<h1 className={classNames(styles["title"], "text-white font-weight-bold w-75 my-0 text-uppercase ")}>
							<span>{title}</span>{subTitle && <span className={classNames(styles["widescreen__title-subtitle"])}>{subTitle}</span>}
						</h1>
					</div>
					<div className="col-12 col-xl-6 d-flex flex-column justify-content-around font-weight-normal px-2">
						{text?.map((item, index) => {
							return (
								<p key={index} className={classNames(styles["description"], "text-white my-0")}>
									{item}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
