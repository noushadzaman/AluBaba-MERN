import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
    const { token, currency } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null
            }
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL  + '/api/order/userorders', {}, { headers: { token } });

            if (response.data.success) {
                let allOrderItem = [];
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrderItem.push(item)
                    })
                })
                setOrderData(allOrderItem.reverse())
                console.log(allOrderItem);

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadOrderData();
    }, [token])

    return (
        <div className="border-t pt-[141px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-[60vh]">

            <div className="text-2xl">
                <Title text1={"MY ORDERS"} />
            </div>

            <div>
                {
                    orderData.map((item, index) => (
                        <div
                            key={index}
                            className="pt-[141px] py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        >
                            <div className="flex items-start gap-6 text-sm">
                                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                                <div>
                                    <p className="sm:text-base font-medium">{item.name}</p>
                                    <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                                        <p className="text-lg">{currency}{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size}</p>
                                    </div>
                                    <p className="mt-2">Date: {new Date(item.date).toDateString()}<span className="text-gray-400 ml-5">Payment: {item.paymentMethod}</span></p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                    <p className="text-sm md:text-base">{item.status}</p>
                                </div>
                                <button
                                    onClick={loadOrderData}
                                    className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
                            </div>
                        </div>
                    ))
                }
                {
                    orderData.length === 0 && <p className="mt-[40px] text-2xl tracking-wider">You havn't ordered yet</p>
                }
            </div>

        </div>
    );
};

export default Orders;