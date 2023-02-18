import React from "react";
import {AccordionBody, AccordionTitle} from "./TitleBody";
import {ArrObj} from "../App";

type AccordionPropsType = {
    menu: string
    collapsed: boolean
    onChange: () => void
    items:Array<ArrObj>
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle menu={props.menu} onChange={props.onChange} />
            {
                !props.collapsed &&
                <AccordionBody items={props.items} />
            }
        </div>
    );
}