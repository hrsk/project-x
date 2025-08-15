import '@/app/styles/index.scss'
import {classNames} from '@/shared/lib';
import {AppRouter} from "@/app/router";
import {useTheme} from "@/app/providers";
import {Header} from "@/widgets/Header";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar/Sidebar";
import '@/shared/config/i18next/i18next'
import {Suspense} from "react";
import {Loading} from "@/pages";


export const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames({cls: 'app', mods: {}, additional: [theme]})}>
            <Suspense fallback={<Loading/>}>
                <Header/>
                <div className={"content"}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}
