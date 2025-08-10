import './index.scss'
import {Counter} from "./components/Counter";

export const App = () => {
    return (
        <div className={"app"}>
            <Counter/>
            <h1>Hello, world!</h1>
        </div>
    )
}
