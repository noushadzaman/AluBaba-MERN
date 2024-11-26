import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            let orderItems = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }
            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            switch (method) {
                case "cod": {
                    const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/order/place', orderData, { headers: { token } });
                    if (response.data.success) {
                        setCartItems({});
                        navigate("/orders");
                    }
                    else {
                        toast.error(response.error.message);
                    }
                    break;
                }

                case "stripe": {
                    const responseStripe = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/order/stripe', orderData, { headers: { token } })
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data;
                        window.location.replace(session_url)
                    }
                    else {
                        toast.error(responseStripe.error.message);
                    }
                    break;
                }
                case "razorpay":
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }




    return (
        <form onSubmit={onSubmitHandler} className="pt-[141px] flex flex-col sm:flex-row justify-between gap-3  min-h-[80vh] border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
            {/* --------- left side -------- */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"DELIVERY INFORMATION"} />
                </div>

                <div className="flex gap-3 ">
                    <input
                        value={formData?.firstName}
                        name="firstName"
                        onChange={onChangeHandler}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name"
                        required
                    />
                    <input
                        value={formData?.lastName}
                        name="lastName"
                        onChange={onChangeHandler}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name"
                        required
                    />
                </div>

                <input
                    value={formData?.email}
                    name="email"
                    onChange={onChangeHandler}
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address"
                    required
                />
                <input
                    value={formData?.street}
                    name="street"
                    onChange={onChangeHandler}
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street"
                    required
                />

                <div className="flex gap-3 ">
                    <input
                        value={formData?.city}
                        name="city"
                        onChange={onChangeHandler}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"
                        required
                    />
                    <input
                        value={formData?.state}
                        name="state"
                        onChange={onChangeHandler}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State"
                        required
                    />
                </div>
                <div className="flex gap-3 ">
                    <input
                        value={formData?.zipcode}
                        name="zipcode"
                        onChange={onChangeHandler}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zip code"
                        required
                    />
                    <input
                        value={formData?.country}
                        name="country"
                        onChange={onChangeHandler}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country"
                        required
                    />
                </div>
                <input
                    value={formData?.phone}
                    name="phone"
                    onChange={onChangeHandler}
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone"
                    required
                />
            </div>

            {/*---------- Right side ----------- */}

            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>

                <div className="mt-12">
                    <Title text1={"PAYMENT METHOD"} />
                    {/* ------------ payment method selection --------------- */}
                    <div className="mt-5 flex gap-3 items-center justify-center flex-col lg:flex-row">
                        <div
                            onClick={() => setMethod('stripe')}
                            className="flex items-center xl:gap-3 border p-2 px-3 cursor-pointer rounded-full">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className="h-5 mx-4 " src={assets.stripe_logo} alt="" />
                        </div>
                        <div
                            onClick={() => setMethod('cod')}
                            className="flex items-center xl:gap-3 border p-2 px-3 cursor-pointer rounded-full">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className="w-full text-end mt-8">
                        <button
                            type="submit"
                            className="bg-black text-white px-16 py-3 test-sm rounded-full"
                        >PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;