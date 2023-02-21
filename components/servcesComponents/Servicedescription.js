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
					{data.title && (
						<h3 className={classNames(styles["signboards__description-title"], "text-center w-75 mx-auto my-0")}>{data.title}</h3>
					)}
					<ul className={classNames(styles["signboards__description-text-list"], "row mx-0 justify-content-center")}>
						{data.text &&
							data.text.map((item, index) => {
								return (
									<li key={index} className={classNames(styles["banners__item"], styles["banner"], "col-12", item.size)}>
										<p className={styles["signboards__description-text"]}>{item.text}</p>
									</li>
								);
							})}
						{data.listTitle && (
							<h3
								className={classNames(
									styles["signboards__description-list-title"],
									styles["signboards__description-text-list"],
									"text-center w-75 mx-auto my-0"
								)}
							>
								{data.listTitle}
							</h3>
						)}
						{data.list &&
							data.list.map((item, index) => {
								return (
									<li
										key={index}
										className={classNames(
											styles["causes__item"],
											styles["signboards__description-text-list"],
											styles[item.textSize],
											"d-flex",
											item.size,
											item.direction
										)}
									>
										<div className={classNames(styles["causes__item-num"], "text-right")}>{index + 1}</div>
										<div className={styles["causes__item-text"]}>
											{item.title && <h4 className={styles["causes__item-title"]}>{item.title}</h4>}
											<p className={classNames(styles["causes__item-desc"], "font-weight-light", styles[item.textSize])}>
												{item.text}
											</p>
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
