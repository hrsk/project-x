import {Suspense} from "react";
import {Loading} from "@/pages";
import {Route, Routes} from "react-router-dom";
import {routesConfig} from "@/shared/config";

export const AppRouter = () => (
    <div className={"page-wrapper"}>
        <Suspense fallback={<Loading/>}>
            <Routes>
                {Object.values(routesConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={element}/>))}
            </Routes>
        </Suspense>
    </div>
)
