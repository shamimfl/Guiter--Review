import { useState } from "react"




const useReviews =()=>{
    const [review, setReview] =useState([]);
    useState(()=>{
        fetch('fakeReview.json')
        .then(res =>res.json())
        .then(review=>setReview(review));
    },[])
    
    return  [review, setReview];
}

export default useReviews;