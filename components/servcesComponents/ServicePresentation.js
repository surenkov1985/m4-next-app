import React from "react";
import styles from "../../styles/serviceStyles/presentation.module.scss";
import classNames from "classnames";
import Image from "next/image";

export default function ServicePresentation({ data }) {
	return (
		<section className={classNames(styles["present"], styles[data.theme], styles[data.page])}>
			<div className={classNames(styles["present__container"], "container d-flex flex-column align-items-center")}>
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
				<div className={classNames(styles["present__row"], styles[data.page], "row ml-0")}>
					{data.description.map((item, index) => {
						return (
							<div
								key={index}
								className={classNames(
									styles["present__col"],
									item.colSize,
									"col-12 d-flex flex-column align-items-center align-items-xl-start justify-content-center"
								)}
							>
								{item.icons && (
									<div className={classNames(styles["present__images-list"])}>
										{item.icons.map((item) => {
											return (
												<Image
													key={item.name}
													className={styles["present__img"]}
													style={{ gridArea: item.name }}
													src={item.icon}
													alt={item.name}
												/>
											);
										})}
									</div>
								)}
								{item.plusBlock && (
									<>
										<h2 className={classNames(styles["present__plus-title"])}>{item.plusBlock.title}</h2>
										<Image src={item.plusBlock.icon} alt={item.plusBlock.alt} className={classNames("ml-5")} />
									</>
								)}
								{item.circle && (
									<div
										className={classNames(
											styles["present__icon"],
											"rounded-circle d-flex align-items-center justify-content-center position-relative"
										)}
									>
										<h4 className={classNames(styles["present__icon-text"], "text-center text-uppercase mb-0")}>
											????
											<br /> ??<br /> ????
											<br />
											<small className="font-weight-bold text-lowercase">??????????</small>
										</h4>
										<h4
											className={classNames(styles["present__icon-text"], "text-center position-absolute")}
											style={{ right: "14%" }}
										>
											?
										</h4>
									</div>
								)}
								{item.important && (
									<div
										className={classNames(
											styles["present__important"],
											"d-flex align-items-center justify-content-center position-relative mx-auto"
										)}
									>
										<h4 className={classNames(styles["present__important-text"], "text-center mb-0")}>
											????
											<br /> ??<br /> ????
											<br />
										</h4>
										<h4
											className={classNames(styles["present__important-mark"], "text-center position-absolute")}
											style={{ right: "4%" }}
										>
											!
										</h4>
									</div>
								)}
								{item.title && (
									<div className={classNames(styles["present__title-container"], "d-flex align-items-center justify-content-center justify-content-lg-start mt-4 mt-xl-0")}>
										{item.icon && <Image className={classNames("")} src={item.icon} />}
										<h3 className={classNames(styles["present__title"],"text-start text-lg-center text-md-left my-0")}>
											{item.title}
										</h3>
									</div>
								)}
								{item.text &&
									item?.text?.map((text, index) => {
										return (
											<p key={index} className={classNames(styles["present__text"], "text-center text-md-left mt-0")}>
												{text}
											</p>
										);
									})}
								{item.list && (
									<>
										<h3 className={styles["present__plus-list-title"]}>{item.list.title}</h3>
										{item.list.items && (
											<ul className={classNames(styles["present__plus-list"], "d-flex mx-auto")}>
												{item.list.items.map((item, index) => {
													return (
														<li
															key={index}
															className={classNames(
																styles["present__plus-list-item"],
																"d-flex flex-row align-items-center"
															)}
														>
															{item.icon && (
																// <div className={classNames(styles["present__plus-list-icon"], "d-flex align-items-center justify-content-center")}>
																<Image src={item.icon} alt="icon" />
																// </div>
															)}
															<span>{item.text}</span>
														</li>
													);
												})}
											</ul>
										)}
										{item.list.text && (
											<li className={classNames(styles["present__plus-list"], "d-flex align-items-center")}>
												{item.list.icon && (
													<span>
														<Image src={item.list.icon} />
													</span>
												)}
												<span>{item.list.text}</span>
											</li>
										)}
									</>
								)}
								{item.button && (
									<div
										className={classNames(
											styles["present__control"],
											"d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-md-start",
											item.direction
										)}
									>
										<button className={classNames(styles["present__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
											{item.button}
										</button>
										{item.controlText && (
											<p className={classNames(styles["present__control-text"], "text-center my-0")}>{item.controlText}</p>
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
							styles["present__control"],
							"d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-md-start"
						)}
					>
						<button className={classNames(styles["present__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
							{data.button}
						</button>
						{data.controlText && <p className={classNames(styles["present__control-text"], "text-center my-0")}>{data.controlText}</p>}
					</div>
				)}
			</div>
		</section>
	);
}
