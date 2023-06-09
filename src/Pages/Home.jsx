import useTitle from "../Hooks/UseTitle/UseTitle";
import AboutUs from "../components/Home/AboutUs";
import HeroSection from "../components/Home/HeroSection";
import MenuItems from "../components/Home/MenuItems";

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <MenuItems></MenuItems>
    </div>
  );
};

export default Home;