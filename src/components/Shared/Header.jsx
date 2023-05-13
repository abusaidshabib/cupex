import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid grid-cols-12 justify-between px-40 h-20 items-center bg-black-500 text-white-200">
      <ul className="list-none flex font-sans text-sm uppercase tracking-widest font-medium col-span-4">
        <li>
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li className="ml-10">
          <Link className="" to="/login">
            login
          </Link>
        </li>
      </ul>
      <p className="font-cursive text-5xl font-extrabold text-orange-500 col-span-4 text-center">
        Cupex
      </p>
      <ul className="list-none flex font-sans text-sm uppercase tracking-widest font-medium col-span-4 justify-end">
        <li>
          <Link className="" to="/">
            Menu
          </Link>
        </li>
        <li className="ml-10">
          <Link className="" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;