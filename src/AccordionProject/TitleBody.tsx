import React from "react";
import {ArrObj} from "../App";


//TITLE----------------------------------------------------------------------------------------
type AccordionTitlePropsType = {
    onChange:()=>void
    menu:string
}


export function AccordionTitle(props:AccordionTitlePropsType){
    return(
        <h3 onClick={props.onChange} className={"dropbtn"}>-{props.menu}-</h3>

    )
}
//--------------------------------------------------------------------------------------------



//BODY-----------------------------------------------------------------------------------------
type AccordionBodyPropsType = {
    items:ArrObj[]
}
export function AccordionBody(props:AccordionBodyPropsType) {
    return<div>
        {/*BODY*/}        {/*BODY*/}         {/*BODY*/}
        {props.items.map((m,index)=>{
                return(
                    <option key={index}>{m.title}</option>
                )
            })}
    </div>
}
//--------------------------------------------------------------------------------------------
