import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <menu className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink className={({ isActive })=> `${styles.link} ${isActive ? styles.active : ""}`} to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}
        </menu>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
