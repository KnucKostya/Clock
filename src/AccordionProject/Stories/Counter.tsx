import React, {Dispatch, SetStateAction} from "react";

type CounterType = {
    counter:number
    setCounter:Dispatch<SetStateAction<number>>
}

const Counter = (props:CounterType) => {
    console.log('Counter render')
    return (
        <div>
            <div>Counter : {props.counter}</div>
            <button onClick={() => props.setCounter(props.counter + 1)}>Count++</button>
        </div>
    );
};

export default React.memo(Counter)