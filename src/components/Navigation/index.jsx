import { NavLink } from "react-router-dom";
import clsx from "clsx";

import styles from "./Navigation.module.scss";

function Navigation() {
  const tabs = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Counter App",
      path: "/counter",
    },
    {
      title: "Todo List App",
      path: "/todo",
    },
    {
      title: "Profile Card",
      path: "/profile",
    },
    {
      title: "Product List",
      path: "/products",
    },
    {
      title: "Comment System",
      path: "/comments",
    },
    {
      title: "Weather App",
      path: "/weather",
    },
    {
      title: "Buttons",
      path: "/buttons",
    },
  ];
  return (
    <nav>
      <ul className={styles["nav-list"]}>
        {tabs.map((tab, index) => {
          return (
            <li key={index}>
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  clsx(styles["link-btn"], isActive && styles.active)
                }
              >
                <span>{tab.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
