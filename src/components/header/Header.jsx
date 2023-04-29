import { Link } from "react-router-dom";
import logoImage from "../../assets/img/turbopack-icon.svg";
import styles from "./Header.module.scss";
import { menu } from "./menu";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="img" height={40} />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.login}>Login</button>
          <button className={styles.signup}>Sign up</button>
        </div>
      </div>
    </div>
  );
};
