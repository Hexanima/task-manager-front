import Header from "./components/Header";
import styles from "./layout.module.css";

function Layout({ children } : {children: any}) {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
