import React from 'react'
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const CustomerFeedback = ({name,rating,image}) => {
    return (
        <>
            <div className=' space-y-2'>
                <div className=' flex items-center gap-2 text-white'>

                    <img src={`images/${image}.jpg`} className='w-16 rounded' />
                    <span>{name}</span>
                </div>
                <div>

                    <Rating
                        initialRating={rating} // Set the initial rating value
                        readonly // Make the rating read-only
                        fullSymbol={<FaStar color="#FFD700" size={20} />} // Custom full star icon
                        emptySymbol={<FaStar color="#E4E5E9" size={20} />} // Custom empty star icon
                    />
                </div>

                <span className='text-white font-normal text-[14px]'>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas dolores perferendis adipisci aliquid, aperiam natus dignissimos? Facilis, enim excepturi.
                </span>
                <hr />

            </div>
        </>
    )
}

export default CustomerFeedback
