import {Stars, ValueType} from "../Stars";
import {useState} from "react";

export default {
    title: 'Stars',
    // component: Stars
}

export const ChangeStars = () => {
    let [ratingValue, setRatingValue] = useState<ValueType>(0)

    return (
        <>
            <Stars selected={ratingValue > 0} setValue={() => setRatingValue(1)}/>
            <Stars selected={ratingValue > 1} setValue={() => setRatingValue(2)}/>
            <Stars selected={ratingValue > 2} setValue={() => setRatingValue(3)}/>
            <Stars selected={ratingValue > 3} setValue={() => setRatingValue(4)}/>
            <Stars selected={ratingValue > 4} setValue={() => setRatingValue(5)}/>
        </>
    )
}