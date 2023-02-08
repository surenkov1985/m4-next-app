import styles from "../styles/header-styles/social-list.module.scss";
import classNames from "classnames";
import Image from "next/image";

export default function SocialList({ socialList }) {
	return (
		<div className={classNames(styles["head__social-list"], "d-flex align-items-center")}>
			{socialList.map((item) => {
				return (
					<div key={item.social} className={styles["head__social-item"]}>
						<a href={item.link} className={classNames(styles["head__social-link"], "d-flex align-items-center")}>
							<Image width={16} height={16} src={item.image} alt={item.social} />
						</a>
					</div>
				);
			})}
		</div>
	);
}
