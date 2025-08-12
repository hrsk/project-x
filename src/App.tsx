import '@/styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {Loading} from "@/components/Loading";
import {MainLazy} from "@/components/pages/main/Main.lazy";
import {useTheme} from "@/styles/theme/useTheme";
import {classNames} from "@/helpers/classNames/classNames";
import {AboutLazy} from "@/components/pages/about/About.lazy";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path={'/'} element={<MainLazy/>}/>
                    <Route path={'/about'} element={<AboutLazy/>}/>
                </Routes>
            </Suspense>

        </div>
    )
}
