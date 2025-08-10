import {useState} from "react";
import './Counter.scss'

export const Counter = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrementHandler = () => {
        setCounter(prevState => ++prevState)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incrementHandler}>+</button>
        </div>
    )
}
