import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderItem from "../OderItem/OrderItem";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover img={orderCoverImg} title="Our Order"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderItem items={salad}></OrderItem>
        </TabPanel>
        <TabPanel>
          <OrderItem items={pizza}></OrderItem>
        </TabPanel>
        <TabPanel>
          <OrderItem items={soup}></OrderItem>
        </TabPanel>
        <TabPanel>
          <OrderItem items={dessert}></OrderItem>
        </TabPanel>
        <TabPanel>
          <OrderItem items={drinks}></OrderItem>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
