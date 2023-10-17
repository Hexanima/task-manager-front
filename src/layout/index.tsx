import usePopup from "../hooks/usePopup";
import Alert from "./components/Alert";
import Header from "./components/Header";
import styles from "./layout.module.css";

function Layout({ children } : {children: React.ReactNode}) {
  const {alert} = usePopup();
  return (
    <div className={styles.mainContainer}>
      {alert.show && <Alert msg={alert.msg} severity={alert.type}/>}
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
