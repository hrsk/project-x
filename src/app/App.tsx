import '@/app/styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "@/app/providers/ThemeProvider/lib/useTheme";
import { classNames } from '@/shared/lib';
import {AppRouter} from "@/app/router";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    )
}
