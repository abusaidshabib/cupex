import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { DiCoffeescript } from "react-icons/di";
import { SiCoffeescript } from "react-icons/si";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-12 place-items-center px-40 py-20 text-black-500 gap-10">
      <div className="col-span-5">
        <p className="text-sm pb-2 text-orange-500 uppercase">What we doing</p>
        <h1 className="text-5xl font-semibold pb-4">About Us</h1>
        <p className="font-serif">
          At our coffee shop, you will find a wide variety of coffee drinks,
          including classic favorites like cappuccinos and lattes, as well as
          specialty drinks like iced caramel macchiatos and pumpkin spice
          lattes. We use only the freshest and highest quality coffee beans,
          carefully roasted to bring out the full flavor and aroma.
        </p>
      </div>
      <div className="col-span-7 place-content-center grid grid-cols-12 gap-10">
        <div className="col-span-6">
          <GiCoffeeBeans className="text-5xl pb-2 text-orange-500" />
          <p className="text-2xl font-semibold">The best World sorts</p>
          <p className="font-serif">
            Our cozy seating areas are perfect for catching up with friends,
            studying, or simply enjoying a quiet moment with a good book.
          </p>
        </div>
        <div className="col-span-6">
          <DiCoffeescript className="text-5xl pb-2 text-orange-500" />
          <p className="text-2xl font-semibold">Many points of sale</p>
          <p className="font-serif">
            Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
            tellus eget magna aliquet ultricies.
          </p>
        </div>
        <div className="col-span-6">
          <GiCoffeePot className="text-5xl pb-2 text-orange-500" />
          <p className="text-2xl font-semibold">Professional baristas</p>
          <p className="font-serif">
            And our friendly staff is always here to greet you with a smile and
            make your coffee experience as enjoyable as possible.
          </p>
        </div>
        <div className="col-span-6">
          <SiCoffeescript className="text-5xl pb-2 text-orange-500" />
          <p className="text-2xl font-semibold">The best World sorts</p>
          <p className="font-serif">
            We also offer a selection of delicious pastries and snacks to pair
            with your coffee, including muffins, croissants, and cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
