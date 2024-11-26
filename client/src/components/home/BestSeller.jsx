import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title";
import ProductItem from "../ProductItem";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestSeller));
        console.log('pro', bestProduct);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products])

    return (
        <div className="my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST SELLERS'} />
                <p className="mt-2 w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ratione rem et voluptas ipsum accusamus
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map((item, index) => <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />)
                }
            </div>
        </div>
    );
};

export default BestSeller;