import React, {MouseEventHandler, useMemo, useState} from "react";

export default  {
    title:'ReactMemo'
}

export const Example1 = () => {

    const [setA, setValueA] = useState(1)
    const [setB, setValueB] = useState(1)

    let factorial = 1
    let factorialB = 1

    factorial = useMemo(()=>{
        for (let i = 1;i<=setA;i++){
            let fake = 0
            while(fake<100000000){
                fake++
            }
            factorial*=i
        }
        return factorial
    },[setA])



    for(let i = 1;i<=setB;i++){
        factorialB*=i
    }



    return <>

        <input type="text" onChange={(event)=>{setValueA(+event.currentTarget.value)}}/>
        <input type="text" onChange={(event)=>{setValueB(+event.currentTarget.value)}}/>
<hr/>

        <div>
            Here is A : {factorial}
        </div>
        <div>
            Here is B : {factorialB}
        </div>

    </>
}