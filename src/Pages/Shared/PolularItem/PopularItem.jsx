

const PopularItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="flex space-x-4">
           <div>
            <img style={{borderRadius:'0px 200px 200px 200px'}} width='100' src={image} alt="" />
            </div> 
            <div className="flex">
                <div>
                    <h3 className="text-xl ">{name} ----------</h3>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className="text-[#BB8506]">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;