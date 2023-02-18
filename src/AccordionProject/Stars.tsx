import React from "react";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export const Stars: React.FC<StarPropsType> = ({selected, setValue}) => {
    return (
        <span onClick={setValue}>
            {selected ? <b>Star</b> : 'Stars'}
        </span>
    )
}