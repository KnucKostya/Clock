import React, {useEffect, useState} from 'react';


const SetTimeoutuseEffect = () => {

    const [counter, setCounter] = useState<number>(0)

    let date = new Date

    if(counter === 60) {
        setCounter(0)
    }


    useEffect(()=>{

        setInterval(()=>{
            setCounter(prevValue=>prevValue+1)
        },1000)

    },[])


    return (
        <div>
            <span>{date.getHours()}:</span>
            <span>{date.getMinutes()}:</span>
            <span>{counter}</span>
        </div>
    );
};

export default SetTimeoutuseEffect;


