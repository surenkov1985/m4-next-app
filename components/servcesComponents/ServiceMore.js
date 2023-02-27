import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "../../styles/serviceStyles/more.module.scss";

export default function ServiceMore({ data }) {
	return (
		<section className={classNames(styles["more"], styles[data.theme], styles[data.page])}>
			<div className={classNames(styles["more__container"], "container d-flex flex-column align-items-center")}>
				{data.title && (
					<div
						className={classNames(
							styles["causes__item"],
							styles["signboards__description-text-list"],
							"d-flex align-items-center w-75 justify-content-center"
						)}
					>
						{data.mark && <div className={classNames(styles["causes__item-num"], "text-right")}>{data.mark}</div>}
						<div className={styles["causes__item-text"]}>
							{data.title && <h4 className={classNames(styles["more__title"], "text-center")}>{data.title}</h4>}
						</div>
					</div>
				)}
				<div className={classNames(styles["more__row"], styles[data.page], "row ml-0")}>
					{data.description.map((item, index) => {
						return (
							<div key={index} className={classNames(styles["more__col"], item.colSize, "col-12 d-flex flex-column")}>
								{item.icon && <Image src={item.icon} alt={item.alt} />}
								{item.plusBlock && (
									<>
										<h2 className={classNames(styles["more__plus-title"])}>{item.plusBlock.title}</h2>
										<Image src={item.plusBlock.icon} alt={item.plusBlock.alt} className={classNames("ml-5")} />
									</>
								)}
								{item.circle && (
									<div
										className={classNames(
											styles["more__icon"],
											"rounded-circle d-flex align-items-center justify-content-center position-relative"
										)}
									>
										<h4 className={classNames(styles["more__icon-text"], "text-center text-uppercase mb-0")}>
											пр
											<br /> и<br /> ме
											<br />
											<small className="font-weight-bold text-lowercase">нение</small>
										</h4>
										<h4
											className={classNames(styles["more__icon-text"], "text-center position-absolute")}
											style={{ right: "14%" }}
										>
											?
										</h4>
									</div>
								)}
								{item.important && (
									<div
										className={classNames(
											styles["more__important"],
											"d-flex align-items-center justify-content-center position-relative mx-auto"
										)}
									>
										<h4 className={classNames(styles["more__important-text"], "text-center mb-0")}>
											Ва
											<br /> ж<br /> но
											<br />
										</h4>
										<h4
											className={classNames(styles["more__important-mark"], "text-center position-absolute")}
											style={{ right: "4%" }}
										>
											!
										</h4>
									</div>
								)}
								{item.title && (
									<h3 className={classNames(styles["more__title"], "font-weight-bold text-center text-md-left")}>{item.title}</h3>
								)}
								{item.text &&
									item?.text?.map((text, index) => {
										return (
											<p key={index} className={classNames(styles["more__text"], "text-center mt-0")}>
												{text}
											</p>
										);
									})}
								{item.list && (
									<>
										{item.list.title && (
											<h3 className={classNames(styles["more__plus-list-title"], "text-center")}>{item.list.title}</h3>
										)}
										{item.list.items && (
											<ul
												className={classNames(
													styles["more__plus-list"],
													"d-flex flex-column flex-md-row justify-content-center"
												)}
											>
												{item.list.items.map((item, index) => {
													return (
														<>
															<li key={index} className={classNames(styles[item.size])}>
																{item.title && (
																	<p className={classNames(styles["more__plus-title"], "text-center text-md-left")}>
																		{item.title}
																	</p>
																)}
																{item.text && (
																	<p className={classNames(styles["more__plus-list"], "text-center text-md-left")}>
																		{item.text}
																	</p>
																)}
															</li>
														</>
													);
												})}
											</ul>
										)}
										{item.list.text && <li className={classNames(styles["more__plus-list"], "text-center")}>{item.list.text}</li>}
									</>
								)}
								{item.punkts &&
									item.punkts.map((item, index) => {
										return (
											<li
												key={index}
												className={classNames(
													styles["more__plus-list"],
													styles["signboards__description-text-list"],

													"d-flex",
													item.direction
												)}
											>
												<ul className={classNames(styles["more__plus-list"], item.direction, "d-flex mb-0 mx-auto")}>
													{item.items.map((item, index) => {
														return (
															<li
																key={index}
																className={classNames(styles["causes__punkt-text"], styles[item.size], "d-flex")}
															>
																{item.marker && <p></p>}
																{item.icon && <Image src={item.icon} className={"mr-3 mr-lg-4"} alt={"icon"} />}
																<div>
																	{item.marker && (
																		<div
																			className={classNames(
																				styles["causes__punkt-marker"],
																				"my-0 mr-4 float-left"
																			)}
																		></div>
																	)}
																	{item.title && (
																		<p className={classNames(styles["more__plus-title"], "my-0")}>{item.title}</p>
																	)}
																	<p className={classNames(styles["causes__punkt-desc"], "font-weight-light mb-0")}>
																		{item.text}
																	</p>
																</div>
															</li>
														);
													})}
												</ul>
											</li>
										);
									})}
								{item.subTitle && (
									<h3 className={classNames(styles["more__title"], "font-weight-bold text-center")}>{item.subTitle}</h3>
								)}
								{item.subText &&
									item?.subText?.map((text, index) => {
										return (
											<p key={index} className={classNames(styles["more__text"], "text-center mt-0")}>
												{text.text}
											</p>
										);
									})}
								{item.button && (
									<div
										className={classNames(
											styles["more__control"],
											"d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-md-start"
										)}
									>
										<button className={classNames(styles["more__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
											{item.button}
										</button>
										{item.controlText && (
											<p className={classNames(styles["more__control-text"], "text-center my-0")}>{item.controlText}</p>
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
							styles["more__control"],
							"d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-md-start"
						)}
					>
						<button className={classNames(styles["more__btn"], "btn btn-sm text-uppercase rounded-pill text-white ")}>
							{data.button}
						</button>
						{data.controlText && <p className={classNames(styles["more__control-text"], "text-center my-0")}>{data.controlText}</p>}
					</div>
				)}
			</div>
		</section>
	);
}
