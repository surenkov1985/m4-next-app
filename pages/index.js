import classNames from "classnames";
import { useRouter } from "next/router";
import { MainLayout } from "../components/MainLayout";

import stylesPromo from "../styles/promo.module.scss";
import stylesAbout from "../styles/about.module.scss";
import stylesServices from "../styles/services.module.scss";
import stylesFeedback from "../styles/feedback.module.scss";
import { causes } from "../variables/about-causes";
import Image from "next/image";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import { indexServices } from "../variables/indexServises";

export default function Index() {
	return (
		<MainLayout>
			<section className={classNames(stylesPromo["promo"], " position-relative")}>
				<div className={classNames(stylesPromo["promo__background"], "  w-100 h-100 position-absolute")}>
					<div
						className={classNames(
							stylesPromo["promo__container"],
							"container  w-100 h-100 d-flex flex-column flex-lg-row align-items-center justify-content-center"
						)}
					>
						<div className={classNames(stylesPromo["promo__text"], " w-100 w-lg-50 d-flex flex-column")}>
							<h1 className={classNames(stylesPromo["promo__title"], " text-center text-lg-left")}>Стань заметнее!</h1>
							<div className={classNames(stylesPromo["promo__title-line"], "mx-auto mx-lg-0")}></div>
						</div>
						<div className={classNames(stylesPromo["promo__description"], " w-100 w-lg-50 mt-4 mt-lg-0")}>
							<h2 className={classNames(stylesPromo["promo__description-title"], "font-weight-bold text-center text-lg-left")}>
								Добро пожаловать в рекламную компанию М4!
							</h2>
							<ul className={stylesPromo["promo__description-list"]}>
								<li className={classNames(stylesPromo["promo__description-item"], "font-weight-normal text-center text-lg-left")}>
									Мы более 10 лет занимаемся производством наружной рекламы и полиграфии.
								</li>
								<li className={classNames(stylesPromo["promo__description-item"], "font-weight-normal text-center text-lg-left")}>
									Найдем подходящее решение для Вашего заказа!
								</li>
								<li className={classNames(stylesPromo["promo__description-item"], "font-weight-normal text-center text-lg-left")}>
									Оставьте заявку и мы свяжемся с Вами.
								</li>
							</ul>
							<div
								className={classNames(
									stylesPromo["promo__description-control"],
									"d-flex justify-content-center justify-content-lg-start"
								)}
							>
								<button
									className={classNames(
										stylesPromo["promo__description-btn"],
										"btn btn-small font-weight-normal rounded-pill text-white"
									)}
								>
									Оставить заявку
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={classNames(stylesAbout["about"], "d-none d-md-flex")}>
				<div
					className={classNames(stylesAbout["about__container"], "container  d-flex flex-column justify-content-center align-items-center")}
				>
					<div className={classNames(stylesAbout["about__title-container"], " d-flex align-items-center justify-content-center")}>
						<span className={stylesAbout["about__title-line"]}></span>
						<h2 className={classNames(stylesAbout["about__title"], " mx-4 text-white text-center")}>
							ПОЧЕМУ ВЫБИРАЮТ
							<br />
							ИМЕННО НАС?
						</h2>
						<span className={stylesAbout["about__title-line"]}></span>
					</div>
					<div className={classNames(stylesAbout["about__list"], " w-100 mt-4 row justify-content-between")}>
						{causes.map((cause) => {
							return (
								<div key={cause.id} className={classNames(stylesAbout["about__item"], "d-flex flex-column align-items-center")}>
									<div
										className={classNames(
											stylesAbout["about__item-img"],
											"rounded-circle d-flex align-items-center justify-content-center"
										)}
									>
										<Image src={cause.image} alt={cause.id} />
									</div>
									<div className={classNames(stylesAbout["about__item-text"], "text-white text-center font-weight-normal")}>
										{cause.text}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className={classNames(stylesServices["services"], " d-flex justify-content-center")}>
				<div className={classNames(stylesServices["services__container"], " container d-flex flex-column")}>
					<div className={classNames(stylesServices["services__title-container"], " d-flex align-items-center justify-content-center")}>
						<span className={stylesServices["services__title-line"]}></span>
						<h2 className={classNames(stylesServices["services__title"], " mx-4 text-center")}>Мы предлагаем</h2>
						<span className={stylesServices["services__title-line"]}></span>
					</div>
					<div className={classNames(stylesServices["services__list"], " mt-4")}>
						{indexServices.map((service) => {
							return (
								<div key={service.alt} className={stylesServices["services__item"]} role="link" data-href="#">
									<Image src={service.image} alt={service.alt} />
									<a
										href=""
										className={classNames(
											stylesServices["services__item-bg"],
											"d-flex flex-column align-items-center align-items-md-end justify-content-end"
										)}
										style={{ background: service.color }}
									>
										<div className={stylesServices["services__item-icon"]}>
											<img src={service.logo} alt={service.alt} />
										</div>
										<div className={stylesServices["secvices__item-content"]}>
											<h4
												className={classNames(
													stylesServices["services__item-title"],
													"mx-auto mr-md-0 text-center text-md-right font-weight-light"
												)}
											>
												{service.text}
											</h4>
											<p
												className={classNames(
													stylesServices["services__item-price"],
													" text-white text-center text-md-right"
												)}
											>
												{service.price}
											</p>
										</div>
									</a>
								</div>
							);
						})}
					</div>
					<div className="services__control w-100 mt-4 d-flex justify-content-center justify-content-sm-end">
						<a href="./services/" className="services__link btn btn-secondary btn-sm rounded-pill text-uppercase" role="button">
							ещё услуги
						</a>
					</div>
				</div>
			</section>

			<section className={classNames(stylesFeedback["feedback"], " d-flex justify-content-between")}>
				<div
					className={classNames(
						stylesFeedback["feedback__container"],
						"container d-flex flex-column flex-md-row align-items-center justify-content-between"
					)}
				>
					<div className={stylesFeedback["feedback__content"]}>
						<h2 className={classNames(stylesFeedback["feedback__title"], "text-white text-uppercase font-weight-bold text-center")}>
							Не нашли нужной позиции?
						</h2>
						<p className={classNames(stylesFeedback["feedback__text"], "text-white font-weight-light font-weight-light text-center")}>
							Мы изготавливаем на заказ. Оставьте заявку и наш менеджер свяжется с Вами!
						</p>
					</div>
					<button className={classNames(stylesFeedback["feedback__btn"], "btn btn-warning rounded-pill text-white text-uppercase")}>
						Оставить заявку
					</button>
				</div>
			</section>
		</MainLayout>
	);
}
