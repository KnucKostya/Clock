import React, {useState} from "react";
import {ArrObj} from "../../App";


export default {
    title: "Accordion"
}


export function AccordionTitle() {
    const [value, setValue] = useState(true)

    const itemsArr: Array<ArrObj> = [
        {title: 'Lol'},
        {title: 'Kek'},
        {title: 'Kok'},
        {title: 'Ses'},
    ]


    return (
        <div>
            <h3 onClick={() => setValue(!value)}>-Menu-</h3>
            {value ?
                <ul>
                    {itemsArr.map(m => <li>{m.title}</li>)}
                </ul>
                : value}
        </div>
    )
}

