import '@/app/styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "@/app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "@/shared/lib/classNames/classNames";
import {About, Main, Loading} from "@/pages";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </Suspense>

        </div>
    )
}
