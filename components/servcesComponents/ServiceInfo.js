import classNames from "classnames";
import React from "react";
import styles from "../../styles/serviceStyles/info.module.scss";
import Image from "next/image";

import incIcon from "../../public/images/services/slim-panels/increment-icon.svg";
import decIcon from "../../public/images/services/slim-panels/decrement-icon.svg";
import { Button } from "reactstrap";

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
										<div className={classNames(styles["info__title-container"], "d-flex align-items-center mx-auto position-relative")}>
											{item.icon && <Image src={item.icon} alt={item.name} />}
											<h3 className={classNames(styles["info__title"])} >{item.title}</h3>
                                            <Button className={classNames(styles["info__button"], "position-absolute rounded-pill")} size={"sm"} >примеры</Button>
										</div>
									)}
								</div>
							</div>
						);
					})}
				</section>
			)}
		</>
	);
}
