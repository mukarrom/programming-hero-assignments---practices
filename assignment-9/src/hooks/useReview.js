import { useEffect, useState } from "react";

const useReview = () =>{
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[]);
    return [comments, setComments];
}

export default useReview;