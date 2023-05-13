import { useContext } from "react";
import {FcGoogle} from "react-icons/fc";
import { AuthContext } from "../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/Shared/GoogleSignIn";
import useTitle from "../Hooks/UseTitle/UseTitle";

const Login = () => {
  useTitle("Login")

  const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      logIn(email, password)
        .then((result) => {
          const user = result.user;
          toast("successfully log in");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div className="grid min-h-screen gap-10">
      <div className="col-span-6 login-bg"></div>
      <form onSubmit={handleLogin} className="col-span-6 grid gap-2 place-content-center px-20">
        <p className="text-orange-500 text-sm uppercase text-center pb-3 font-medium tracking-wider">
          login
        </p>
        <h1 className="text-3xl font-semibold text-black-900 pb-5 text-center">
          Welcome back dude
        </h1>
        <p className="text-center pb-8 font-serif">
          A login form is a graphical interface element used to authenticate a
          user is identity before granting access to a restricted system or
          website.
        </p>
        <input
          className="bg-white-300 px-8 py-5"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br className="py-3" />
        <input
          className="bg-white-300 px-8 py-5"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br className="py-3" />
        <GoogleSignIn></GoogleSignIn>
        <br className="py-3" />
        <p>If you have already an account then <Link className="text-orange-600 underline" to="/login">Login</Link></p>
        <br className="py-3" />
        <input
          className="bg-black-600 py-5 text-white-500"
          type="submit"
          value="Login Now"
        />
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
