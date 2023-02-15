import React from "react";
import styles from "../../styles/serviceStyles/terms.module.scss";

export default function ServiceTerms() {
	return (
		<section className="signboards__terms terms">
			<div className="container d-flex justify-content-center">
				<div className="row terms__row ml-0">
					<div className="col-12 col-lg-7 terms__col d-flex flex-column">
						<h3 className="terms__title font-weight-bold text-center text-md-left">Стоимость и гарантии</h3>
						<p className="terms__text text-center text-md-left">
							Наша компания гарантирует, что цена рекламной вывески будет максимально доступной, при безупречном качестве исполнения,
							поскольку вы приобретаете рекламу без посредников, непосредственно у производителя.
						</p>
						<p className="terms__text text-center text-md-left">
							Стоимость вы можете узнать у наших менеджеров по телефону или посетив наш офис. Также мы даем гарантию от 5 лет на несущие
							конструкции и от 2х лет на светодиодную продукцию.
						</p>
					</div>
					<div className="col-12 col-lg-5 terms__col d-flex flex-column ">
						<h3 className="terms__title font-weight-bold text-center text-md-left">Сроки выполнения</h3>
						<p className="terms__text text-center text-md-left">
							Мы изготавливает рекламные носители в минимальные сроки, которые устанавливаются после изучения проекта.
						</p>
						<p className="terms__text text-center text-md-left">
							Обычно это составляет от 5 до 10 рабочих дней, в зависимости от сложности и размера проекта.
						</p>
						<div className="terms__control d-flex justify-content-center justify-content-lg-start">
							<button className="terms__btn btn btn-sm text-uppercase rounded-pill text-white ">Оставить заявку</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
