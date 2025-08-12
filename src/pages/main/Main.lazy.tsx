import {lazy} from "react";

export const MainLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        //@ts-ignore
        resolve(import('./Main'))
    }, 2000)
}));