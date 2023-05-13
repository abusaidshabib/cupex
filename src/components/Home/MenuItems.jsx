import { Link } from "react-router-dom";

const data = [
  {
    img: "https://www.acouplecooks.com/wp-content/uploads/2021/05/Latte-Art-069.jpg",
    name: "Espresso",
    price: 2.5,
    description: "A single shot of rich, dark espresso.",
  },
  {
    img: "https://www.cookingclassy.com/wp-content/uploads/2022/07/iced-coffee-05.jpg",
    name: "Iced Coffee",
    price: 4.5,
    description:
      "Chilled coffee served over ice, with or without milk and sweetener.",
  },
  {
    img: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMTkzOTgyMDI3NjQ0/copycat-starbucks-mocha-frappuccino.jpg",
    name: "Mocha Frappuccino",
    price: 6.5,
    description:
      "A blended coffee drink with chocolate syrup, milk, and ice, topped with whipped cream.",
  },
  {
    img: "https://perfectdailygrind.com/wp-content/uploads/2019/11/7053045385_96bd088e72_k-1024x683.jpg",
    name: "Turkish Coffee",
    price: 3.5,
    description:
      "A traditional coffee preparation method where finely ground coffee is boiled in a pot with sugar and served unfiltered.",
  },
  {
    img: "https://www.acouplecooks.com/wp-content/uploads/2021/12/Mocha-Cappuccino-004.jpg",
    name: "Cappuccino",
    price: 3.5,
    description: "Equal parts espresso, steamed milk, and milk foam.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycjJwJOovPjlz0usoVgsFrCOisNnfFQ13xrHPwTlXjJMWLb4GUlbnshk_LSsuPBuFMN4&usqp=CAU",
    name: "Latte",
    price: 4.0,
    description:
      "A shot of espresso topped with steamed milk and a thin layer of foam.",
  },
  {
    img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/7/1394188793056/Flat-White-Coffee--012.jpg?width=700&quality=85&dpr=1&s=none",
    name: "Flat White",
    price: 4.5,
    description:
      "A latte with less milk and more espresso, resulting in a stronger coffee flavor.",
  },
  {
    img: "https://www.chilitochoc.com/wp-content/uploads/2022/12/homemade-caramel-latte-1023x1536.jpg",
    name: "Irish Coffee",
    price: 7.5,
    description:
      "Coffee spiked with Irish whiskey and topped with whipped cream.",
  },
  {
    img: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Caramel-Latte-2-1-1024x1536.jpg",
    name: "Caramel Latte",
    price: 4.5,
    description: "A latte with caramel syrup and whipped cream on top.",
  },
  {
    img: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2016/11/Vanilla-Latte-3.jpg?w=683&ssl=1",
    name: "Vanilla Latte",
    price: 4.5,
    description:
      "A latte with vanilla syrup and a sprinkle of vanilla powder on top.",
  },
];

const MenuItems = () => {
  return (
    <div className="text-center px-40 bg-black-800 py-20">
      <p className="text-sm pb-2 text-orange-500 uppercase">menu Items</p>
      <p className="text-5xl font-semibold pb-4 text-white-500">
        Cupex popular Menu
      </p>
      <div className="gap-10 py-10">
        <div
          className="flex items-center justify-between border border-white-500 p-8 hover:bg-white-900"
        >
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2016/11/Vanilla-Latte-3.jpg?w=683&ssl=1"
            alt=""
          />
          <div className="text-left">
            <p className="text-white-100 text-lg font-medium">
              Americano Rosted GRED
            </p>
            <p className="text-white-500 font-serif">
              A latte with vanilla syrup and a sprinkle of vanilla powder on
              top.
            </p>
          </div>
          <p className="text-white-500 text-lg font-bold tracking-widest">
            15$
          </p>
          <button className="bg-orange-500 py-2 px-5 rounded-md">Order Now</button>
        </div>
      </div>
      <Link className="bg-orange-500 px-8 py-3 rounded-md">See More</Link>
    </div>
  );
};

export default MenuItems;
