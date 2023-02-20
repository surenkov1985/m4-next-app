import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "../../styles/serviceStyles/terms.module.scss";

export default function ServiceTerms({ data }) {
	return (
		<section className={classNames(styles["terms"], styles[data.theme])}>
			<div className={classNames(styles["terms__container"], "container d-flex justify-content-center")}>
				<div className={classNames(styles["terms__row"], "row ml-0")}>
					{data.description.map((item, index) => {
						return (
							<div key={index} className={classNames(styles["terms__col"], item.colSize, "col-12 d-flex flex-column")}>
								{item.icon && (
										<Image src={item.icon} alt={item.alt}  />
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
								{item.button && (
									<div
										className={classNames(
											styles["terms__control"],
											"d-flex align-items-center justify-content-center justify-content-md-start"
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
				{/* <section className="signboards__terms terms">
            <div className="container d-flex justify-content-center">
                <div className="row w-100 terms__row ml-0">
                    <div className="col-12 col-md-3 terms__col d-flex flex-column align-items-center">
                        <div
                            className="terms__icon rounded-circle d-flex align-items-center justify-content-center position-relative">
                            <h4 className="terms__icon-text text-center text-uppercase mb-0">пр<br/> и<br/> ме<br/><small
                                    className="font-weight-bold text-lowercase">нение</small></h4>
                            <h className="terms__icon-text text-center position-absolute " style={{right: "14%"}}>?</h>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 terms__col d-flex flex-column ">
                        <p className="terms__text text-center text-md-left mt-0 text-white ">
                            Вывески из гибкого неона подходят для крепления на стены любых видов и фактур.
                            Гипсокартон, кирпич, гладкая или рельефная штукатурка, натуральный массив, стеклянные и
                            зеркальные поверхности – не
                            имеет значения. Наши специалисты точно знают, как и чем фиксировать светодиодные буквы,
                            надписи, тематические
                            изображения и фигуры.
                        </p>
                        <p className="terms__text text-center text-md-left text-white">
                            Гибкий неон также можно встраивать непосредственно в буквы или вывески для придания им
                            неповторимого стиля и еще
                            большей
                            яркости, что непременно привлечет внимание прохожих.
                        </p>
                        <div
                            className="terms__control d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
                            <button className="terms__btn btn btn-sm text-uppercase rounded-pill text-white ">
                                Оставить заявку
                            </button>
                            <p className="terms__control-text text-center text-white">Срок выполнения от 5 до 10 рабочих
                                дней.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section> */}
			</div>
		</section>
	);
}
