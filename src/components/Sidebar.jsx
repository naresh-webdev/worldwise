import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

function Sidebar() {
  const date = new Date().getFullYear();
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {date} By WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
