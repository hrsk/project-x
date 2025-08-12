import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {Loading} from "./components/Loading";
import {MainLazy} from "./components/pages/main/Main.lazy";
import {AboutLazy} from "./components/pages/about/About.lazy";
import {useTheme} from "./styles/theme/useTheme";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
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
