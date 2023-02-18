import React from "react";

type UsersPropsType = {
    state:{title: string}[]
    memoizedSetTitle:(title:string)=>void
}

const Cities = (props:UsersPropsType) => {

    console.log("Cities rendered")

    return <div>
        <ul>
            {props.state.map(m =>
                <li key={m.title} onClick={() => {props.memoizedSetTitle(m.title)}}>
                    {m.title}
                </li>)
            }
        </ul>
    </div>
}

export default React.memo(Cities)
