import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/Shared/GoogleSignIn";
import useTitle from "../Hooks/UseTitle/UseTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, updateUser } = useContext(AuthContext);

  const [pass, setPass] = useState();
  const [cpass, setCPass] = useState();
  const [wrongPass, setWrongPass] = useState(false);
  const [select, setSelect] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const checkPass = () => {
    if (pass === cpass) {
      setWrongPass(false);
    } else {
      setWrongPass(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email, pass, select);

    createUser(email, pass).then((result) => {
      const user = result.user;
      const userData = {
        displayName: name,
      };
      updateUser(userData)
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="col-span-6 grid place-content-center px-20"
      >
        <p className="text-orange-500 text-sm uppercase text-center pb-3 font-medium tracking-wider">
          Register new account
        </p>
        <h1 className="text-3xl font-semibold text-black-900 pb-5 text-center">
          Connect your self with us
        </h1>
        <p className="text-center pb-8 font-serif">
          A login form is a graphical interface element used to authenticate a
          user is identity before granting access to a restricted system or
          website.
        </p>
        <input
          className="bg-white-300 px-8 py-5"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <br className="py-3" />
        <input
          className="bg-white-300 px-8 py-5"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br className="py-3" />
        <input
          onChange={(e) => setPass(e.target.value)}
          onBlur={checkPass}
          className="bg-white-300 px-8 py-5"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br className="py-3" />
        <input
          onChange={(e) => setCPass(e.target.value)}
          onBlur={checkPass}
          className="bg-white-300 px-8 py-5"
          type="password"
          name="cpassword"
          id="cpassword"
          placeholder="Confirm your password"
        />
        <br className="py-3" />
        <GoogleSignIn></GoogleSignIn>
        <br className="py-3" />
        <p>
          If don't have any account then{" "}
          <Link className="text-orange-600 underline" to="/register">
            register
          </Link>
        </p>
        <br className="py-3" />
        <input
          className="bg-black-600 py-5 text-white-500"
          type="submit"
          value="Register Now"
        />
      </form>
      <div className="col-span-6 login-bg"></div>
    </div>
  );
};

export default Register;
