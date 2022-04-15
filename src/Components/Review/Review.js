import useReviews from '../../Hooks/Hooks';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [review, setReview] =useReviews();
    return (
        <div>
            <h1 className='text-5xl text-center m-5 font-serif'>All Coustomer Review</h1>
        <div className=' md:grid grid-cols-2 gap-10 mt-10'>
            {
                review.map(data=> <ReviewCard data={data} key={data.id}></ReviewCard>)
            }
        </div>
        </div>
    );
};

export default Review;