import React, {useCallback, useMemo, useState} from "react";
import s from './Stories.module.css'
import Counter from "./Counter";
import Cities from "./Users";

export default {
    title: 'ReactMemo'
}


export const StoriesSelect = () => {

    console.log('Render Component')

    const [value, setValue] = useState<boolean>(false)
    const [select, setSelect] = useState<string>('Select')
    const [counter, setCounter] = useState<number>(0)
    const [state, setState] = useState<{ title: string }[]>([
        {title: 'Ukraine'},
        {title: 'Kyiv'},
        {title: 'Lviv'},
        {title: 'Kharkiv'},
    ])

    const h3onClickHandler = () => {
        setValue(!value)
    }


//JUST FUNCTION
    // const setTitleHandler = (incomingValue: string) => {
    //     setSelect(incomingValue)
    //     setValue(!value)
    // }

    //FUNCTION WITH useMemo
    // let memoizedSetTitle = useMemo(()=>{
    //    return setTitleHandler
    // },[state])


    // ---------------for Cities

    //FUNCTION WITH useCallback
    let useCallbackk = useCallback((incomingValue: string) => {
        setSelect(incomingValue)
        setValue(!value)
    }, [value])


    const addNewOption = () => {
        const newOption = {title: 'Lozova'}
        return setState([...state, newOption])
    }

    const newState = useMemo(() => {
        return state.filter(f => f.title.includes('v'))
    }, [state])

    // ---------------for Counter

    const counterState = useMemo(()=>{
        return counter
    },[counter])

    const setCounterUseCallBAck = useCallback(()=>{
       return setCounter
    },[counter])

    return (
        <div className={s.batya}>
            <h3 onClick={h3onClickHandler} className={s.select}>{select}
                <div className={s.arrow}></div>
            </h3>
            <button onClick={addNewOption}>AddNewOption</button>


            {value ?

                <Cities state={newState} memoizedSetTitle={useCallbackk}/>

                : value}

            <Counter counter={counterState} setCounter={setCounter}/>

        </div>
    );

}