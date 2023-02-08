import Link from "next/link";
import styles from "../styles/header-styles/nav-list.module.scss";
import classNames from "classnames";

export default function NavList({ paths }) {
	return (
		<ul className={classNames(styles["head__navigation-list"], "d-flex w-100 align-items-center flex-column flex-lg-row")}>
			{paths.map((page) => {
				return (
					<li key={page.pageName} className={classNames(styles["head__navigation-item"], "nav-item")}>
						<Link href={page.pagePath} className={classNames(styles["head__navigation-link"], "text-center link px-2")}>
							{page.pageName}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
