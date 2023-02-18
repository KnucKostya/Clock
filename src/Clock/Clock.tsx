import React, {useEffect, useState} from 'react';
import s from './clock.module.css'

// const zeroPlusFunction = (time:number) => time < 10 ? '0' + time : time
//
//
// const Clock = () => {
//
//     const [data,setData] = useState(new Date())
//
//
//     useEffect(()=>{
//        let intervalID = setInterval(()=>{
//                 setData(new Date())
//             },1000)
//
//         // return clearInterval(intervalID)
//
//     },[])
//
//     return (
//         <div>
//             <span>{zeroPlusFunction(data.getHours())}:</span>
//             <span>{zeroPlusFunction(data.getMinutes())}:</span>
//             <span>{zeroPlusFunction(data.getSeconds())}</span>
//         </div>
//     );
// };

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Get time
        const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
        const [h, m, s] = time;

        // Get angles
        const degHour = h * (360 / 12) + m * (360 / 12 / 60);
        const degMin = m * (360 / 60) + s * (360 / 60 / 60);
        const degSec = s * (360 / 60);

        // Set angles to CSS custom property
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty("--degHour", `${degHour}deg`);
        rootStyle.setProperty("--degMin", `${degMin}deg`);
        rootStyle.setProperty("--degSec", `${degSec}deg`);

        return () => clearInterval(timerId);
    }, [date]);

    const zeroPlusFunction = (num: number) => num < 10 ? '0' + num : num

    return (
        <div className={s.totalPage}>
            <span className={s.clock}>
                <div className={s.Hhand}></div>
                <div className={s.Mhand}></div>
                <div className={s.Shand}></div>
            </span>
            <div className={s.numContainer}>
                <span className={s.numStyles}>{zeroPlusFunction(date.getHours())}:</span>
                <span className={s.numStyles}>{zeroPlusFunction(date.getMinutes())}:</span>
                <span className={s.numStyles}>{zeroPlusFunction(date.getSeconds())}</span>
            </div>
        </div>

    );
};


export default Clock;