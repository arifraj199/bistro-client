import Cover from "../Cover/Cover";
import PopularItem from "../PolularItem/PopularItem";

const MenuCategory = ({ items, img, title }) => {
  // const [menu]  = useMenu();
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 my-16">
        {items.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
