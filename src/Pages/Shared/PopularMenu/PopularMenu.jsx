import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularItem from "../PolularItem/PopularItem";


const PopularMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popular = data.filter(item=>item.category==='popular');
            setMenu(popular)
        })
    },[])
    return (
        <section>
            <SectionTitle
             subheading="Check it out"
             heading='From our menu'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 my-16">
                {
                    menu.map(item=><PopularItem 
                        key={item._id}
                        item={item}
                    ></PopularItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;