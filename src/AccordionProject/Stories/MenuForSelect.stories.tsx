import React, {Reducer, ReducerState, useReducer, useState} from "react";
import s from './Stories.module.css'
import {Collapsed, reducerMenu, TsarType} from "../reducer/reducerMenu";
import {ActionTypeAC} from "../reducer/reducerMenu";



export default{
    title:'SelectMenu'
}

const state = {
    value:false
}

export const DropMenu = () => {
    // const [value,setValue] = useState<boolean>(false)
    const [value,dispatch] = useReducer<Reducer<any, TsarType>>(reducerMenu, false)
    // const boolValue = reducerMenu(false, ForActionType(true))

     const [select,setSelect] = useState<string>('Select')


    const state:Array<{title:string}> = [
        {title:'Ukraine'},
        {title:'Kyiv'},
        {title:'Lviv'},
        {title:'Kharkiv'},
    ]

    const h3onClickHandler = () => {
        dispatch(Collapsed(!value))
    }


    const setTitleHandler = (incomingValue:string) => {
        setSelect(incomingValue)
        // setValue(!value)
        dispatch(Collapsed(!value))
    }

    // const [active, setActive] = useState<boolean>(false)
    //
    // const selectItem = state.find(i=>i.title)


    const activeF = ({isActive}:{isActive:boolean}) => (isActive ? s.ul : '')

    //??????^^^^^^^^^
    return(
        <div className={s.batya}>
            {/*title*/}
            <h3 onClick={h3onClickHandler} onMouseEnter={()=>{}} className={s.select}>{select}
                <div className={s.arrow}></div>
            </h3>

            {/*body*/}
            {value ?
            <div className={s.dropdownMenu}>
                    <ul className = {s.ul}>
                        {state.map(m=>
                            <li  key={m.title} onClick={()=> {setTitleHandler(m.title)}} className={s.li}>
                                {m.title}
                            </li>
                        )}
                    </ul>
            </div>
                : value}

        </div>
    )

}