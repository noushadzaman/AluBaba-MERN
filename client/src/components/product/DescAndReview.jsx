import { useState } from "react";

const DescAndReview = ({ productData }) => {
    const [isDescOpen, setIsDescOpen] = useState(true);
    const { description } = productData;

    return (
        <div className='mt-20'>
            <div className='flex'>
                <p
                    onClick={() => setIsDescOpen(true)}
                    className='border px-5 py-3 text-sm cursor-pointer'
                >Description</p>
                <p
                    onClick={() => setIsDescOpen(false)}
                    className='border px-5 py-3 text-sm cursor-pointer'
                >Reviews (19)</p>
            </div>
            {
                isDescOpen ?
                    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                        <p>{description}</p>
                    </div> :
                    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                        <p>Alex jhonson: Nice product!!</p>
                    </div>
            }
        </div>
    )
}

export default DescAndReview