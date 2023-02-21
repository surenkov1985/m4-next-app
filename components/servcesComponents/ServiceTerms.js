import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "../../styles/serviceStyles/terms.module.scss";

export default function ServiceTerms({ data }) {
	return (
		<section className={classNames(styles["terms"], styles[data.theme])}>
			<div className={classNames(styles["terms__container"], "container d-flex flex-column align-items-center")}>
				{data.title && (
					<div
						className={classNames(
							styles["causes__item"],
							styles["signboards__description-text-list"],
							// styles[item.textSize],
							"d-flex align-items-center w-75"
							// item.size,
							// item.direction
						)}
					>
						{data.mark && <div className={classNames(styles["causes__item-num"], "text-right")}>{data.mark}</div>}
						<div className={styles["causes__item-text"]}>
							{data.title && <h4 className={styles["causes__item-title"]}>{data.title}</h4>}
						</div>
					</div>
				)}
				<div className={classNames(styles["terms__row"], styles[data.page], "row ml-0")}>
					{data.description.map((item, index) => {
						return (
							<div key={index} className={classNames(styles["terms__col"], item.colSize, "col-12 d-flex flex-column")}>
								{item.icon && <Image src={item.icon} alt={item.alt} />}
								{item.plusBlock && (
									<>
										<h2 className={classNames(styles["terms__plus-title"])}>{item.plusBlock.title}</h2>
										<Image src={item.plusBlock.icon} alt={item.plusBlock.alt} className={classNames("ml-5")} />
									</>
								)}
								{item.circle && (
									<div
										className={classNames(
											styles["terms__icon"],
											"rounded-circle d-flex align-items-center justify-content-center position-relative"
										)}
									>
										<h4 className={classNames(styles["terms__icon-text"], "text-center text-uppercase mb-0")}>
											пр
											<br /> и<br /> ме
											<br />
											<small className="font-weight-bold text-lowercase">нение</small>
										</h4>
										<h
											className={classNames(styles["terms__icon-text"], "text-center position-absolute")}
											style={{ right: "14%" }}
										>
											?
										</h>
									</div>
								)}
								{item.title && (
									<h3 className={classNames(styles["terms__title"], "font-weight-bold text-center text-md-left")}>{item.title}</h3>
								)}
								{item.text &&
									item?.text?.map((text, index) => {
										return (
											<p key={index} className={classNames(styles["terms__text"], "text-center text-md-left mt-0")}>
												{text}
											</p>
										);
									})}
								{item.list && (
									<>
										<h3 className={styles["terms__plus-list-title"]}>{item.list.title}</h3>
										{item.list.items && (
											<ul className={classNames(styles["terms__plus-list"], "d-flex flex-column")}>
												{item.list.items.map((item, index) => {
													return <li key={index}>{item}</li>;
												})}
											</ul>
										)}
										{item.list.text && <li className={classNames(styles["terms__plus-list"])}>{item.list.text}</li>}
									</>
								)}
								{item.button && (
									<div
										className={classNames(
											styles["terms__control"],
											"d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-md-start"
										)}
									>
										<button className={classNames(styles["terms__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
											{item.button}
										</button>
										{item.controlText && (
											<p className={classNames(styles["terms__control-text"], "text-center my-0")}>{item.controlText}</p>
										)}
									</div>
								)}
							</div>
						);
					})}
				</div>
				{data.button && (
					<div
						className={classNames(
							styles["terms__control"],
							"d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-md-start"
						)}
					>
						<button className={classNames(styles["terms__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
							{data.button}
						</button>
						{data.controlText && <p className={classNames(styles["terms__control-text"], "text-center my-0")}>{data.controlText}</p>}
					</div>
				)}
			</div>
		</section>
	);
}
