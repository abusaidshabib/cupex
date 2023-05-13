import { useEffect, useState } from "react";
import useTitle from "../Hooks/UseTitle/UseTitle";

const MenuItems = () => {
  useTitle("Menus");
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch("https://cupex-backend.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data.data));
  }, []);

  return (
    <div className="text-center px-40 bg-black-800 py-20 max-md:px-6 max-md:2">z
      <p className="text-sm pb-2 text-orange-500 uppercase">menu Items</p>
      <p className="text-5xl font-semibold pb-4 text-white-500">
        Cupex popular Menu
      </p>
      <div className="grid gap-10 py-10">
        {menu?.map((data) => (
          <div
            key={data._id}
            className="grid grid-cols-12 items-center justify-between border border-white-500 p-8 hover:bg-white-900"
          >
            <img
              className="col-span-3 w-20 h-20 rounded-full object-cover"
              src={data?.img}
              alt=""
            />
            <div className="text-left col-span-3">
              <p className="text-white-100 text-lg font-medium">{data?.name}</p>
              <p className="text-white-500 font-serif">{data?.description}</p>
            </div>
            <p className="text-white-500 text-lg font-bold tracking-widest col-span-3">
              15$
            </p>
            <button className="bg-orange-500 py-2 px-5 rounded-md col-span-3">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
