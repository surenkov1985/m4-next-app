import classNames from 'classnames';
import React from 'react'
import { Button } from 'reactstrap';
import styles from "../../styles/serviceStyles/order-control.module.scss"

export default function ServiceOrderColtrol({theme, direction, controlText}) {
  return (
		<div
			className={classNames(
				styles["order__control"],
                styles[theme],
				"col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center",
				direction
			)}
		>
			<Button className={classNames(styles["order__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>Оставить заявку</Button>
			{controlText && (
				<p className={classNames(styles["order__control-text"], "text-center my-0")}>Срок выполнения от 5 до 10 рабочих дней.</p>
			)}
		</div>
  );
}
