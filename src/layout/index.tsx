import Alert from "./components/Alert";
import Header from "./components/Header";
import styles from "./layout.module.css";

function Layout({ children } : {children: React.ReactNode}) {
  return (
    <div className={styles.mainContainer}>
      {false && <Alert/>}
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
