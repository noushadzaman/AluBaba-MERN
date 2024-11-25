import { useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const Add = ({ token }) => {
    const [imageCount, setImageCount] = useState(1);
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Men');
    const [subCategory, setSubCategory] = useState('Topwear');
    const [bestSeller, setBestSeller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name)
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            formData.append("bestSeller", bestSeller);
            formData.append("sizes", JSON.stringify(sizes));

            images.forEach((img, idx) => {
                formData.append(`image${idx + 1}`, img);
            })

            const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } });
            if (response.data.success) {
                toast.success(response.data.message)
                setImages([]);
                setName('');
                setDescription('');
                setPrice('');
                setCategory('Men');
                setSubCategory('Topwear');
                setBestSeller(false);
                setSizes([])
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full items-start gap-3">
            <div>
                <p className="w-full">Product name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required />
            </div>
            <div>
                <p className="mb-2">Product Description</p>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write content here" required />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2">Product Category</p>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2" name="" id="">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div>
                    <p className="mb-2">Product Sub Category</p>
                    <select
                        value={subCategory}
                        onChange={(e) => setSubCategory(e.target.value)}
                        className="w-full px-3 py-2" name="" id="">
                        <option value="tshirt">T-Shirt</option>
                        <option value="jacket">Jacket</option>
                        <option value="hoodie">Hoodie</option>
                        <option value="pants">Pants</option>
                        <option value="joggers">Joggers</option>
                        <option value="shoes">Shoes</option>
                    </select>
                </div>
                <div>
                    <p className="mb-2">Product Price</p>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 sm:w-[120px]" type="Number" placeholder="0"
                    />
                </div>
            </div>
            <div>
                <p className="mb-2">Product Sizes</p>
                <div className="flex gap-3">
                    <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(i => i !== "S") : [...prev, "S"])}>
                        <p className={`${sizes.includes("S") ? "bg-[#ffcdc4]" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(i => i !== "M") : [...prev, "M"])}>
                        <p className={`${sizes.includes("M") ? "bg-[#ffcdc4]" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(i => i !== "L") : [...prev, "L"])}>
                        <p className={`${sizes.includes("L") ? "bg-[#ffcdc4]" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(i => i !== "XL") : [...prev, "XL"])}>
                        <p className={`${sizes.includes("XL") ? "bg-[#ffcdc4]" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(i => i !== "XXL") : [...prev, "XXL"])}>
                        <p className={`${sizes.includes("XXL") ? "bg-[#ffcdc4]" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="mb-2">Upload image</p>

                <div className="flex gap-2 items-start">
                    {
                        new Array(imageCount).fill(0).map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <img className="w-20 cursor-pointer" src={!images[index] ? assets.upload_area : URL.createObjectURL(images[index])} alt="" />
                                <input
                                    onChange={(e) => setImages(prev => ([...prev, e.target.files[0]]))}
                                    type="file"
                                    id={`image${index}`}
                                    hidden
                                />
                            </label>
                        ))
                    }
                    {
                        imageCount < 4 &&
                        <MdOutlineAddPhotoAlternate
                            onClick={() => setImageCount(prev => imageCount < 4 && prev + 1)}
                            size={30} className="cursor-pointer"
                        />
                    }
                </div>
            </div>

            <div className="flex gap-2">
                <input
                    onChange={() => setBestSeller(prev => !prev)}
                    checked={bestSeller}
                    type="checkbox" id="bestseller"
                />
                <label className="cursor-pointer" htmlFor="bestseller">Add to best seller</label>
            </div>
            <button type="submit" className="w-28 py-3 mt-3 bg-black text-white">ADD</button>
        </form>
    )
}

export default Add