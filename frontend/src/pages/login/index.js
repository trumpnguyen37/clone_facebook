import Footer from "../../components/Login/Footer";
import LoginForm from "../../components/Login/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm";
import "./style.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        {/* <div className="register"></div> */}
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}
