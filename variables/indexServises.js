import card1 from "../public/images/card1.png";
import card2 from "../public/images/card2.png";
import card3 from "../public/images/card3.png";
import card4 from "../public/images/card4.png";
import card5 from "../public/images/card5.png";
import card6 from "../public/images/card6.png";
import card7 from "../public/images/card7.png";
import card8 from "../public/images/card8.png";
import card9 from "../public/images/card9.png";
import card10 from "../public/images/card10.png";
import card11 from "../public/images/card11.png";
import card12 from "../public/images/card12.png";

export const indexServices = [
	{
		image: card1,
		alt: "card1",
		text: "Вывески",
		logo: "images/banner-icon.svg",
		color: "rgba(235, 167, 7, 0.79)",
		path: "",
		price: "от 5 000 руб",
	},
	{
		image: card2,
		alt: "card2",
		text: "Объёмные буквы",
		logo: "images/text-icon.svg",
		color: "rgba(62, 53, 36, 0.79)",
		path: "",
		price: "от 60 руб/см",
	},
	{
		image: card3,
		alt: "card3",
		text: "Гибкий неон",
		logo: "images/neon-icon.svg",
		color: "rgba(80, 10, 10, 0.79)",
		path: "",
		price: "от 2000 руб",
	},
	{
		image: card4,
		alt: "card4",
		text: "Согласование рекламы",
		logo: "images/adv-icon.svg",
		color: "rgba(142, 149, 13, 0.79)",
		path: "",
		price: "от 1 000 руб",
	},
	{
		image: card5,
		alt: "card5",
		text: "Брендирование транспорта",
		logo: "images/brand-icon.svg",
		color: "rgba(0, 59, 78, 0.79)",
		path: "",
		price: "от 1500 руб",
	},
	{
		image: card6,
		alt: "card6",
		text: "Стенды",
		logo: "images/billboard-icon.svg",
		color: "rgba(20, 23, 51, 0.79)",
		path: "",
		price: "от 1000 руб",
	},
	{ image: card7, alt: "card7", text: "УФ печать", logo: "images/print-icon.svg", color: "rgba(95, 23, 152, 0.79)", path: "", price: "от 500 руб" },
	{
		image: card8,
		alt: "card8",
		text: "Широко-форматная печать",
		logo: "images/wideprint-icon.svg",
		color: "rgba(0, 172, 216, 0.79)",
		path: "",
		price: "от 300 руб",
	},
	{
		image: card9,
		alt: "card9",
		text: "Наклейки",
		logo: "images/sticker-icon.svg",
		color: "rgba(55, 103, 63, 0.79)",
		path: "",
		price: "от 10 руб/шт",
	},
	{
		image: card10,
		alt: "card10",
		text: "Таблички",
		logo: "images/table-icon.svg",
		color: "rgba(57, 97, 100, 0.79)",
		path: "",
		price: "от 300 руб",
	},
	{
		image: card11,
		alt: "card11",
		text: "Фрезеровка",
		logo: "images/milling-icon.svg",
		color: "rgba(118, 71, 0, 0.79)",
		path: "",
		price: "от 30 руб",
	},
	{
		image: card12,
		alt: "card12",
		text: "Панель-кронштейны",
		logo: "images/bracket-icon.svg",
		color: "rgba(20, 23, 51, 0.79)",
		path: "",
		price: "от 8 000 руб",
	},
];

export const serviceTypes = [
	{
		theme: "dark",
		textTheme: "text-white",
		direction: "flex-row",
		titleSize: "large",
		title: "Производство рекламы",
		id: "advertion-production",
		list: [
			{
				image: card1,
				alt: "card1",
				text: "Вывески",
				logo: "",
				color: "rgba(235, 167, 7, 0.79)",
				path: "services/signboards",
				price: "от 5 000 руб",
			},
			{
				image: card12,
				alt: "card12",
				text: "Панель-кронштейны",
				logo: "",
				color: "rgba(20, 23, 51, 0.79)",
				path: "",
				price: "от 8 000 руб",
			},
		],
	},
	{
		theme: "light",
		textTheme: "text-dark",
		direction: "flex-row-reverse",
		titleSize: "light",
		id: "printing",
		title: "Печать широкорматная, интерьерная , УФ",
		list: [
			{
				image: card1,
				alt: "card1",
				text: "Вывески",
				logo: "",
				color: "rgba(235, 167, 7, 0.79)",
				path: "services/signboards",
				price: "от 5 000 руб",
			},
			{
				image: card12,
				alt: "card12",
				text: "Панель-кронштейны",
				logo: "",
				color: "rgba(20, 23, 51, 0.79)",
				path: "",
				price: "от 8 000 руб",
			},
		],
	},
	{
		theme: "dark",
		textTheme: "text-dark",
		direction: "flex-row",
		titleSize: "small",
		id: "polygraphy",
		title: "Полиграфические услуги",
		list: [
			{
				image: card1,
				alt: "card1",
				text: "Вывески",
				logo: "",
				color: "rgba(235, 167, 7, 0.79)",
				id: "signboards",
				path: "services/signboards",
				price: "от 5 000 руб",
			},
			{
				image: card12,
				alt: "card12",
				text: "Панель-кронштейны",
				logo: "",
				color: "rgba(20, 23, 51, 0.79)",
				path: "",
				price: "от 8 000 руб",
			},
		],
	},
];

export const advertionProductionData = {
	theme: "dark",
	textTheme: "white",
	direction: "flex-row",
	title: "Производство рекламы",
	list: [
		{
			image: card1,
			alt: "card1",
			text: "Вывески",
			logo: "images/banner-icon.svg",
			color: "rgba(235, 167, 7, 0.79)",
			path: "",
			price: "от 5 000 руб",
		},
		{
			image: card12,
			alt: "card12",
			text: "Панель-кронштейны",
			logo: "",
			color: "rgba(20, 23, 51, 0.79)",
			path: "",
			price: "от 8 000 руб",
		},
	],
};
