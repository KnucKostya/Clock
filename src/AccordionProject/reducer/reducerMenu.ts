

export const reducerMenu = (state:boolean,action:TsarType)=>{
    switch (action.type) {
        case "COLLAPSED-TYPE": {
            return {state}
        }
        default: return state
    }
}



export type TsarType = ActionTypeAC

export type ActionTypeAC = ReturnType<typeof Collapsed>

export const Collapsed = (value:boolean) =>{
return{
    type:"COLLAPSED-TYPE",
    payload:{
        value:value
    }
}as const
}