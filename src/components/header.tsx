import styles from "@/styles/header.module.css";
import Menu from "@/components/menu";
import Link from "next/link";
import { urlData } from "@/data/urlData";

const Header = () => {
  return(
    <div className={styles.headers}>
      <h1 className={styles.title}>
        <Link className={styles.titleLink} href={urlData['home'][1]}>{urlData['home'][0]}</Link>
      </h1>
      <ul className={styles.menuContainer}>
        <Menu menuName={urlData['self-introduction'][0]} link={urlData['self-introduction'][1]} />
        <Menu menuName={urlData['machines'][0]} link={urlData['machines'][1]} />
      </ul>
    </div>
  );
}

export default Header;
