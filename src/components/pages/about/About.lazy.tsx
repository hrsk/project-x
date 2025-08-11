import {lazy} from "react";

export const AboutLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./About'))
    }, 2000)
}));