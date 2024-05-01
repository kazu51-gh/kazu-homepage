import styles from "@/styles/menu.module.css";
import { MenuList } from "@/types/menuList";
import { FC } from "react";
import Link from "next/link";

const Menu: FC<MenuList> = ({ menuName, link }) => {
  return(
    <div>
      <li className={styles.menu}><Link className={styles.menuLink} href={link}>{menuName}</Link></li>
    </div>
  );
}

export default Menu;
