import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="h-screen grid place-content-center text-center hero-bg">
        <>
          <h1 className="text-9xl pb-10 font-brush text-white-500">
            Fuel Your Day{" "}
          </h1>
          <div>
            <Link className="bg-orange-600 px-16 py-2 rounded-sm text-lg uppercase tracking-wider font-semibold text-white-500 hover:bg-orange-800" to="/">
              Check Items
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default HeroSection;
