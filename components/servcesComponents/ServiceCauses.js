import classNames from "classnames";
import React from "react";
import styles from "../../styles/serviceStyles/causes.module.scss";

export default function ServiceCauses({ data }) {
	return (
		<section className={classNames(styles["signboards__causes"], styles["causes"])}>
			<div className="container px-0">
				<div className={classNames(styles["signboards__causes-block"], "d-flex flex-column flex-lg-row w-100")}>
					<div className="col-12 col-lg-4 px-0 ml-0">
						<div
							className={classNames(
								styles["signboards__causes-card"],
								"h-100  d-flex flex-column align-items-center justify-content-start justify-content-xl-center"
							)}
						>
							<div className={classNames(styles["causes__card-num-container"], "position-relative")}>
								<p className={classNames(styles["causes__card-num"], "mr-4")}>{data.cardNumb}</p>
								<p className={classNames(styles["causes__card-text"], "mr-4 text-white word-wrap position-absolute text-uppercase")}>
									{data.cardText}
								</p>
							</div>
							<div className={classNames(styles["causes__card-text-container"], "mr-2 text-center text-white")}>{data.cardSubText}</div>
						</div>
					</div>

					<div className="col-12 col-lg-8 pr-0 pl-0">
						<ul
							className={classNames(
								styles["signboards__causes-list"],
								styles["causes__list"],
								"d-flex flex-column flex-xl-row ml-0 my-0"
							)}
						>
							{data.cardList.map((column, index) => {
								return (
									<div
									key={index}
										className={classNames(
											styles["causes__list-column"],
											styles["col-12"],
											"col-12 col-xl-6 d-flex flex-column",
											index === 0 ? "" : "justify-content-start justify-content-xl-between mr-0 mr-xl-5"
										)}
									>
										{column.cardItems.map((item) => {
											return (
												<li key={item.text} className={classNames(styles["causes__item"], "d-flex")}>
													<span className={classNames(styles["causes__item-num"], "text-right")}>{item.num}</span>
													<span className={classNames(styles["causes__item-text"], "text-white")}>{item.text}</span>
												</li>
											);
										})}
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
