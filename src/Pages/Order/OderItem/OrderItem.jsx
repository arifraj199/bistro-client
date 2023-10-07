import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderItem = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 my-16">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    );
};

export default OrderItem;