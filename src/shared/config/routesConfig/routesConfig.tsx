import {RouteProps} from "react-router-dom";
import {About, Main} from "@/pages";

export enum ROUTE_PATHS {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<ROUTE_PATHS, string> = {
    [ROUTE_PATHS.MAIN]: '/',
    [ROUTE_PATHS.ABOUT]: '/about',
}

export const routesConfig: Record<ROUTE_PATHS, RouteProps> = {
    [ROUTE_PATHS.MAIN]: {
        path: RoutePath.main,
        element: <Main/>,
    },
    [ROUTE_PATHS.ABOUT]: {
        path: RoutePath.about,
        element: <About/>,
    }
}