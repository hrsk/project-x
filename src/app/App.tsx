import '@/app/styles/index.scss'
import {classNames} from '@/shared/lib';
import {AppRouter} from "@/app/router";
import {useTheme} from "@/app/providers";
import {Header} from "@/widgets/Header";

export const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames({cls: 'app', mods: {}, additional: [theme]})}>
            <Header/>
            <AppRouter/>
        </div>
    )
}
