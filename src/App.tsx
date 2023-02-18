import React from 'react';
import Clock from "./Clock/Clock";

export type ArrObj = {
    title: string
}

export const App = () => {

    return (
        <div>
            {/*<Accordion collapsed={value} onChange={() => setValue(!value)}*/}
            {/*           menu={Menu} items={itemsArr} />*/}
            <Clock/>
        </div>
    )
}