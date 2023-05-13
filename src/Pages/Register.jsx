import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <form className="col-span-6 grid place-content-center px-20">
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
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
        />
        <br className="py-3" />
        <input
          className="bg-white-300 px-8 py-5"
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <br className="py-3" />
        <input
          className="bg-white-300 px-8 py-5"
          type="password"
          name=""
          id=""
          placeholder="Confirm your password"
        />
        <br className="py-3" />
        <button className="border border-white-800 py-5 text-black-900 flex items-center justify-center hover:text-white-500 hover:bg-black-900">
          <FcGoogle className="text-3xl pr-2" />
          <span className="pl-2">Sign in with Google</span>
        </button>
        <br className="py-3" />
        <input
          className="bg-black-600 py-5 text-white-500"
          type="submit"
          value="Login Now"
        />
      </form>
      <div className="col-span-6 login-bg"></div>
    </div>
  );
};

export default Register;