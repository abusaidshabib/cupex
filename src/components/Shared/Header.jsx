import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [status, setStatus] = useState(false);

  return (
    <div>
      <div
        className={
          !status
            ? "min-h-screen bg-black-500 py-10 hidden"
            : "min-h-screen bg-black-500 py-10"
        }
      >
        <Link to="/" className="font-cursive text-5xl font-extrabold text-orange-500 col-span-4 text-center">
          Cupex
        </Link>
        <ul className="list-none grid gap-5 justify-center text-sm uppercase tracking-widest font-medium col-span-4 text-white-500 text-center pt-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <></>
          ) : (
            <li className="ml-10">
              <Link className="" to="/login">
                login
              </Link>
            </li>
          )}
          <li>
            <Link className="" to="/menu">
              Menu
            </Link>
          </li>
          {user ? (
            <></>
          ) : (
            <li className="ml-10">
              <Link className="" to="/register">
                Register
              </Link>
            </li>
          )}
          {user ? (
            <li className="ml-10">
              <Link
                onClick={logOut}
                className="bg-white-900 py-2 px-4 rounded-md"
              >
                Logout
              </Link>
            </li>
          ) : (
            <></>
          )}
          <li
            onClick={() => setStatus(!status)}
            className="flex justify-center"
          >
            <AiOutlineClose className="text-white-500 text-2xl" />
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-12 justify-between h-20 items-center bg-black-500 text-white-200 md:px-10 lg:px-16 xl:px-20 2xl:px-40 max-md:px-10">
        <ul className="list-none flex font-sans text-sm uppercase tracking-widest font-medium col-span-4 max-md:hidden">
          <li>
            <Link className="" to="/">
              Home
            </Link>
          </li>
          {user ? (
            <></>
          ) : (
            <li className="ml-10">
              <Link className="" to="/login">
                login
              </Link>
            </li>
          )}
        </ul>
        <p className="font-cursive text-5xl font-extrabold text-orange-500 col-span-4 text-center max-md:col-span-6 max-md:text-left">
          Cupex
        </p>
        <ul className="list-none flex font-sans text-sm uppercase tracking-widest font-medium col-span-4 justify-end max-md:hidden">
          <li>
            <Link className="" to="/menu">
              Menu
            </Link>
          </li>
          {user ? (
            <li className="ml-10">
              <Link
                onClick={logOut}
                className="bg-white-900 py-2 px-4 rounded-md"
              >
                Logout
              </Link>
            </li>
          ) : (
            <></>
          )}
          {user ? (
            <></>
          ) : (
            <li className="ml-10">
              <Link className="" to="/register">
                Register
              </Link>
            </li>
          )}
        </ul>
        <div
          onClick={() => setStatus(!status)}
          className="max-md:col-span-6 flex justify-end md:hidden"
        >
          <BiMenuAltRight className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
