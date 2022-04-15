import React from 'react';

const UserReview = (props) => {
    const {name ,comment,ratings,img} =props.data
    return (
        <div>
             <div className='md:flex justify-between border-2 font-serif bg-pink-100 shadow-2xl rounded-md p-5 md:h-[300px]'>
            <img className='w-40 h-40 rounded-bl-full' src={img} alt="" />
            <div className='p-5'>
                <p className='text-xl'>{name}</p>
                <p className='text-red-500'>Rating:{ratings}</p>
                <p>{comment}</p>
            </div>
        </div>
        </div>
    );
};

export default UserReview;