import classNames from "classnames";
import React from "react";
import styles from "../../styles/serviceStyles/info.module.scss";
import Image from "next/image";

import incIcon from "../../public/images/services/slim-panels/increment-icon.svg";
import decIcon from "../../public/images/services/slim-panels/decrement-icon.svg";
import { Button } from "reactstrap";
import ServiceOrderColtrol from "./ServiceOrderColtrol";

export default function ServiceInfo({ data }) {
	return (
		<>
			{data.list && (
				<section className={classNames(styles[data.page], "w-100")}>
					{data.list.map((item) => {
						return (
							<div key={item.name} className={classNames(styles["info"], styles[item.theme], styles[item.name])}>
								<div className={classNames(styles["info__container"], "container d-flex flex-column align-items-center")}>
									{item.title && (
										<div
											className={classNames(
												styles["info__title-container"],
												"d-flex align-items-center justify-content-center position-relative"
											)}
										>
											{item.icon && <Image src={item.icon} alt={item.name} />}
											<h3 className={classNames(styles["info__title"], "mb-0")}>{item.title}</h3>
											<Button className={classNames(styles["info__button"], "position-absolute rounded-pill")} size={"sm"}>
												примеры
											</Button>
										</div>
									)}
									<div className={classNames(styles["terms__row"], styles[data.page], "row ml-0")}>
										{item.description?.map((item, index) => {
											return (
												<div key={index} className={classNames(styles["info__col"], item.colSize, "col-12")}>
													{item.list && (
														<ul className={classNames(styles["info__list"], "row  mx-0 ")}>
															{item.list.map((row, index) => {
																return (
																	<li key={index} className={classNames("col-12 pl-0 mb-3", row.size)}>
																		<h4 className={classNames(styles["info__list-title"])}>{row.title}</h4>
																		<p>{row.text}</p>
																	</li>
																);
															})}
														</ul>
													)}
													{item.punkts && (
														<ul className={classNames(styles["info__punkts"], "d-flex flex-column")}>
															{item.punkts.map((row, index) => {
																return (
																	<li key={index}>
																		{row.title && (
																			<h4
																				className={classNames(
																					styles["info__punkts-title"],
																					"d-flex align-items-center"
																				)}
																			>
																				{row.icon && <Image src={row.icon} />}
																				{row.title}
																			</h4>
																		)}
																		{row.punkt && (
																			<p className={classNames(styles["info__punkts-text"], "mb-0")}>
																				{row.punkt}
																			</p>
																		)}
																		{row.text && (
																			<p className={classNames(styles["info__punkts-text"], "mb-0")}>
																				{row.text}
																			</p>
																		)}
																	</li>
																);
															})}
														</ul>
													)}
												</div>
											);
										})}
										{item.button && <ServiceOrderColtrol theme={item.theme} direction="" controlText={true} />}
									</div>
								</div>
							</div>
						);
					})}
				</section>
			)}
		</>
	);
}
