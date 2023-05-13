import { Link } from "react-router-dom";

import { MdLocationOn, MdOutlineCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="h-1/2 bg-white-900 grid grid-cols-4 py-16 px-40 place-content-center gap-20">
      <div className="col-span-1">
        <p className="font-cursive text-5xl font-extrabold text-orange-500 col-span-4 pb-4">
          Cupex
        </p>
        <p className="text-white-500 font-serif">
          We use only the freshest and highest quality coffee beans, carefully
          roasted to bring out the full flavor and aroma.
        </p>
      </div>
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold text-orange-500 pb-5">Explore</h1>
        <Link className="text-base text-white-500" to="/">
          Home
        </Link>
      </div>
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold text-white-900 pb-5">Explore</h1>
        <Link className="text-base text-white-500" to="/">
          Items-menu
        </Link>
      </div>
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold text-white-500 pb-5">Contact</h1>
        <p className="flex pb-5">
          <MdLocationOn className="text-white-500 text-2xl" />{" "}
          <span className="text-white-500 text-sm pl-2">
            44 Danwers, NY City, USA, 70-102
          </span>
        </p>
        <p className="flex pb-5">
          <MdOutlineCall className="text-white-500 text-2xl" />{" "}
          <span className="text-white-500 text-sm pl-2">
            +10800-33-800; +10500-55-900
          </span>
        </p>
        <p className="flex pb-5">
          <FiMail className="text-white-500 text-2xl" />{" "}
          <span className="text-white-500 text-sm pl-2">
            +10800-33-800; +10500-55-900
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
