import { useState } from "react";
import style from "./Counter.module.css"

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    return(
        <button className={style.btn} onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    )
}

export default Counter;