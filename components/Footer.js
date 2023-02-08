import React from "react";

export default function Footer() {
	return <footer className="foot">Footer</footer>;
}

{
	/* <div class="foot__container container">
            <div class="head-navbar">
                <nav
                    class="head__navigation navbar navbar-expand-lg navbar-dark d-flex align-items-center align-items-lg-center flex-column flex-lg-row justify-content-center justify-content-lg-between px-0 py-0">

                    <div class="foot__navigation-logo">
                        <div class="logo ">
                            <a href="" class="logo__link navbar-brand w-100">
                                <img class="w-100" src="assets/images/logo.svg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="d-flex flex-column align-items-center" id="navContent">
                        <div class="navbar-nav d-flex align-items-center justify-content-center swiper mySwiper">
                            <ul
                                class="foot__navigation-partners d-flex w-100 align-items-center flex-row head__navigation-column swiper-wrapper">
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/abrau-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/eldorado-icon.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/gj-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/kfc-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/kia-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/letual-icon.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/m-video-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/magnit-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/metro-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/ozon-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/poisk-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/red-place-icon.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/riv-gosh-icon.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/rosseti-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/tabris-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/transoil-logo.svg" alt="">
                                    </a>
                                </li>
                                <li class="head__navigation-item nav-item swiper-slide d-flex justify-content-center">
                                    <a href="" class="text-center link">
                                        <img src="assets/images/slider-partners-images/yandex-logo.svg" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-nav d-none d-lg-flex align-items-center w-100 mt-3">
                            <ul
                                class="head__navigation-list d-flex w-100 align-items-center justify-content-between  flex-column flex-md-row head__navigation-column">
                                <li class="head__navigation-item nav-item">
                                    <a href="" class="head__navigation-link text-center link px-2">Главная</a>
                                </li>
                                <li class="head__navigation-item nav-item ">
                                    <a href="./services/" class="head__navigation-link text-center link px-2">Услуги</a>
                                </li>
                                <li class="head__navigation-item nav-item ">
                                    <a href="./portfolio.html"
                                        class="head__navigation-link text-center link px-2">Портфолио</a>
                                </li>
                                <li class="head__navigation-item nav-item ">
                                    <a href="./contacts.html"
                                        class="head__navigation-link text-center link px-2">Контакты</a>
                                </li>
                                <li class="head__navigation-item nav-item">
                                    <a href="./info.html"
                                        class="head__navigation-link text-center link px-2">Информация</a>
                                </li>
                                <li class="head__navigation-item nav-item ">
                                    <a href="./vacancies.html"
                                        class="head__navigation-link text-center link px-2">Вакансии</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="d-flex flex-column align-items-center align-items-lg-end justify-content-between">

                        <h4 class="foot__contacts-title d-block d-lg-none text-center">КОНТАКТЫ</h4>

                        <div class="head__contacts-list d-flex flex-lg-column align-items-start align-items-lg-end">
                            <div class="dropup head__contacts-dropdown">
                                <button class="btn btn-toggle foot__contacts-btn px-0" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span>Новороссийск</span>
                                    <span>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 1L5 5L1 1" stroke="white" />
                                        </svg>
                                    </span>
                                </button>
                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="">Новороссийск</a>
                                    <a class="dropdown-item" href="">Новороссийск</a>
                                    <a class="dropdown-item" href="">Новороссийск</a>
                                </div>
                            </div>

                            <div class="head__contacts-phone text-right">
                                <a class="foot__contacts-link text-white font-weight-bold" href="
                                    tel:+79094455000">8 (909) 44-55-000</a>
                                <p class="foot__contacts-addr text-white">ул. Энгельса 84, офис 44</p>
                            </div>
                        </div>
                        <div class="foot__social-list d-flex align-items-center">
                            <div class="foot__social-item">
                                <a href="mailto:info@m4r.ru" class="foot__social-link">
                                    info@m4r.ru
                                </a>
                            </div>
                            <div class="foot__social-item">
                                <a href="" class="foot__social-link d-flex align-items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.96873 0C2.18232 0.00306448 1.42899 0.316824 0.872906 0.872906C0.316824 1.42899 0.00306448 2.18232 0 2.96873V13.0313C0.00306448 13.8177 0.316824 14.571 0.872906 15.1271C1.42899 15.6832 2.18232 15.9969 2.96873 16H13.0313C13.8177 15.9969 14.571 15.6832 15.1271 15.1271C15.6832 14.571 15.9969 13.8177 16 13.0313V2.96873C15.9969 2.18232 15.6832 1.42899 15.1271 0.872906C14.571 0.316824 13.8177 0.00306448 13.0313 0H2.96873ZM2.96873 1.45455H13.0313C13.8749 1.45455 14.5455 2.12509 14.5455 2.96873V13.0313C14.5455 13.8749 13.8749 14.5455 13.0313 14.5455H2.96873C2.76953 14.5467 2.57207 14.5084 2.38779 14.4328C2.20352 14.3571 2.0361 14.2456 1.89524 14.1048C1.75438 13.9639 1.6429 13.7965 1.56725 13.6122C1.4916 13.4279 1.45329 13.2305 1.45455 13.0313V2.96873C1.45455 2.12509 2.12509 1.45455 2.96873 1.45455Z"
                                            fill="white" />
                                        <path
                                            d="M10.9873 4.44643L3.89964 7.41367C3.61443 7.55185 3.51796 7.82857 3.83071 7.97875L5.64899 8.60608L10.0454 5.65632C10.2854 5.47114 10.5312 5.52052 10.3197 5.72423L6.5438 9.43586L6.42519 11.0066C6.53505 11.2491 6.73621 11.2503 6.86452 11.1297L7.90917 10.0566L9.69831 11.5111C10.1139 11.7782 10.34 11.6058 10.4294 11.1163L11.6029 5.08362C11.7247 4.48106 11.517 4.21556 10.9873 4.44643V4.44643Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div class="foot__social-item">
                                <a href="" class="foot__social-link d-flex align-items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.33886 10.9474C5.74943 10.9474 4.27248 9.05077 4.21094 5.89478H5.50802C5.55063 8.2112 6.50685 9.19239 7.26427 9.3947V5.89478H8.48566V7.89256C9.23361 7.80658 10.0193 6.8962 10.2844 5.89478H11.5058C11.3022 7.12885 10.4501 8.03924 9.84421 8.4135C10.4501 8.71697 11.4206 9.51102 11.7899 10.9474H10.4454C10.1566 9.98645 9.43717 9.24297 8.48566 9.14181V10.9474H8.33886Z"
                                            fill="white" />
                                        <path
                                            d="M2.96873 0C2.18232 0.00306448 1.42899 0.316824 0.872906 0.872906C0.316824 1.42899 0.00306448 2.18232 0 2.96873V13.0313C0.00306448 13.8177 0.316824 14.571 0.872906 15.1271C1.42899 15.6832 2.18232 15.9969 2.96873 16H13.0313C13.8177 15.9969 14.571 15.6832 15.1271 15.1271C15.6832 14.571 15.9969 13.8177 16 13.0313V2.96873C15.9969 2.18232 15.6832 1.42899 15.1271 0.872906C14.571 0.316824 13.8177 0.00306448 13.0313 0H2.96873ZM2.96873 1.45455H13.0313C13.8749 1.45455 14.5455 2.12509 14.5455 2.96873V13.0313C14.5455 13.8749 13.8749 14.5455 13.0313 14.5455H2.96873C2.76953 14.5467 2.57207 14.5084 2.38779 14.4328C2.20352 14.3571 2.0361 14.2456 1.89524 14.1048C1.75438 13.9639 1.6429 13.7965 1.56725 13.6122C1.4916 13.4279 1.45329 13.2305 1.45455 13.0313V2.96873C1.45455 2.12509 2.12509 1.45455 2.96873 1.45455Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div class="foot__social-item">
                                <a href="" class="foot__social-link d-flex align-items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.6625 2.32604C12.9256 1.58572 12.0482 0.998791 11.0812 0.599453C10.1142 0.200115 9.07702 -0.00364427 8.03013 4.93304e-05C3.64339 4.93304e-05 0.0683074 3.55804 0.0642893 7.92603C0.0642893 9.32503 0.431944 10.686 1.12607 11.891L0 16L4.223 14.898C5.39126 15.5309 6.70008 15.8627 8.03013 15.863H8.03415C12.4219 15.863 15.996 12.305 16 7.93303C16.001 6.89108 15.7949 5.85922 15.3935 4.89692C14.9922 3.93461 14.4035 3.06087 13.6615 2.32604H13.6625ZM8.03013 14.521C6.84379 14.5214 5.67926 14.2036 4.65896 13.601L4.41788 13.457L1.91261 14.111L2.58162 11.678L2.42491 11.427C1.76173 10.3774 1.411 9.16206 1.41336 7.92203C1.41336 4.29604 4.38373 1.33805 8.03415 1.33805C8.90381 1.33649 9.76517 1.50632 10.5686 1.83774C11.372 2.16915 12.1016 2.6556 12.7152 3.26904C13.331 3.88009 13.8192 4.60646 14.1516 5.40627C14.484 6.20607 14.6541 7.06348 14.6519 7.92903C14.6479 11.568 11.6775 14.521 8.03013 14.521V14.521ZM11.6615 9.58703C11.4636 9.48803 10.4862 9.00903 10.3024 8.94103C10.1195 8.87603 9.98593 8.84203 9.85535 9.04003C9.72174 9.23703 9.34003 9.68603 9.22551 9.81503C9.111 9.94803 8.99246 9.96303 8.79357 9.86503C8.59568 9.76503 7.95379 9.55703 7.19437 8.88003C6.60171 8.35503 6.20492 7.70503 6.08639 7.50803C5.97187 7.31003 6.07534 7.20403 6.17478 7.10503C6.26218 7.01703 6.37268 6.87303 6.47212 6.75903C6.57257 6.64503 6.60572 6.56103 6.67102 6.42903C6.73631 6.29503 6.70517 6.18103 6.65595 6.08204C6.60572 5.98304 6.20894 5.00604 6.04118 4.61204C5.88046 4.22304 5.71672 4.27704 5.59417 4.27204C5.47966 4.26504 5.34606 4.26504 5.21245 4.26504C5.11156 4.26754 5.01228 4.29077 4.92084 4.33327C4.82939 4.37578 4.74776 4.43664 4.68106 4.51204C4.49824 4.71004 3.98694 5.18904 3.98694 6.16604C3.98694 7.14303 4.70015 8.08203 4.8006 8.21503C4.89904 8.34803 6.2009 10.347 8.19889 11.207C8.67102 11.412 9.04269 11.533 9.333 11.625C9.81014 11.777 10.2411 11.754 10.5846 11.705C10.9663 11.647 11.7609 11.225 11.9287 10.762C12.0934 10.298 12.0934 9.90203 12.0432 9.81903C11.994 9.73503 11.8604 9.68603 11.6615 9.58703V9.58703Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                </nav>
            </div>
        </div> */
}
