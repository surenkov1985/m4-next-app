import classNames from "classnames";
import React from "react";
import styles from "../../styles/serviceStyles/request.module.scss";

export default function ServicesRequest() {
	return (
		<section className={styles["request"]}>
			<div className={classNames(styles["request__container"], "container")}>
				<div className={classNames(styles["request__block"], "d-flex flex-column flex-md-row align-items-center justify-content-center")}>
					<button className={classNames(styles["request__btn"], "btn btn-sm text-uppercase rounded-pill btn-outline-light")}>
						Оставить заявку
					</button>
					<p className={classNames(styles["request__text"], "text-white mx-3 my-0 mt-2 mt-lg-0")}>
						Срок выполнения от 1 до 3-х рабочих дней.
					</p>
				</div>
			</div>
		</section>
	);
}
