import styles from "../../styles/Login.module.css";
import LoginForm from "../componentes/LoginForm";

const Login = () => {
  return (
    <main id="login">
     
      <div id="login-home" className={styles.login}>
      <section className={styles.hero}>
        <LoginForm/>
      </section>
      

      </div>
    </main>
  );
};

export default Login;