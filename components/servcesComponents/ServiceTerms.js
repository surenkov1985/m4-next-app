import classNames from "classnames";
import React from "react";
import styles from "../../styles/serviceStyles/terms.module.scss";

export default function ServiceTerms({ data }) {
	return (
		<section className={styles["terms"]}>
			<div className={classNames(styles["terms__container"], "container d-flex justify-content-center")}>
				<div className={classNames(styles["terms__row"], "row ml-0")}>
					{data.description.map((item, index) => {
						return (
							<div key={index} className={classNames(styles["terms__col"], item.colSize, "col-12 d-flex flex-column")}>
								<h3 className={classNames(styles["terms__title"], "font-weight-bold text-center text-md-left")}>{item.title}</h3>
								{item.text.map((text, index) => {
									return <p key={index} className={classNames(styles["terms__text"], "text-center text-md-left")}>{text}</p>;
								})}
								{item.button && (
									<div className={classNames(styles["terms__control"], "d-flex justify-content-center justify-content-lg-start")}>
										<button className={classNames(styles["terms__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
											{item.button}
										</button>
									</div>
								)}
							</div>
						);
					})}
					
				</div>
			</div>
		</section>
	);
}
