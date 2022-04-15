import React from 'react';
import { Link } from 'react-router-dom';
import UserReview from '../UserReview/UserReview';
import useReviews from './../../Hooks/Hooks';

const Home = () => {

    const [review, setReview] = useReviews([])

    return (
        <div>
            <div className='md:flex items-center justify-around mt-10'>
                <div className='font-serif p-3'>
                    <h1 className='text-5xl text-pink-400'>Your Choose</h1>
                    <h1 className='text-6xl'>Our Collection</h1>
                    <p className='md:w-[50%]'>Buy genuine and 100% authentic Acoustic guitar, ukulele, violin, Capo, string, tuner, picks & all accessroies from the best guitar Shop in BD.</p>
                </div>
                <img className='md:w-[348px] md:h-[464px]' src="https://guitarshopbd.com/wp-content/uploads/2021/12/Tanglewood-TWBB-SFC-E-back-11-348x464.jpg" alt="" />
            </div>

            <h1 className='text-3xl text-center text-pink-400 mt-10 mb-10'>Customer Reviews(3)</h1>

            <div className='md:grid grid-cols-3 gap-2'>

                {
                    (review.slice(3, 6)).map(data => <UserReview data={data} key={data.id}></UserReview>)
                }
            </div>
            <div className='flex justify-center '>
                <Link className='text-slate-50 bg-pink-500  mb-20 mt-20 border-2 rounded-tr-full  text-xl pl-5   pr-5' to={'/review'}>SEE ALL</Link>
            </div>

        </div>
    );
};

export default Home;