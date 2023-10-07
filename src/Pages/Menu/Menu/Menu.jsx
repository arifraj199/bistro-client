import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Menu */}
      <Cover img={menuImg} title="our menu"></Cover>
      {/* offered */}
      <SectionTitle
        subheading="Don't Miss"
        heading="Today's offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
     
      {/* desserts */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title="dessert"
      ></MenuCategory>
      {/* pizza's */}
      <MenuCategory
        items={pizzas}
        img={pizzaImg}
        title="pizza"
      ></MenuCategory>
      {/* salads */}
      <MenuCategory
        items={salads}
        img={saladImg}
        title="salad"
      ></MenuCategory>
      {/* soups */}
      <MenuCategory items={soups} img={soupImg} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
