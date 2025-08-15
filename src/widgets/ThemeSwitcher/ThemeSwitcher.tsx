import {classNames} from "@/shared/lib";
import styles from './ThemeSwitcher.module.scss';
import {Button, ButtonThemeStyles} from "@/shared/ui/Button/Button";
import {Theme, useTheme} from "@/app/providers";
import LightThemeIcon from "@/shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "@/shared/assets/icons/theme-dark.svg";

interface ThemeSwitcher {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcher) => {

    const {theme: appTheme} = useTheme();

    const {className} = props;

    return (
        <Button theme={ButtonThemeStyles.UNSTYLED}
                className={classNames({cls: styles.toggleTheme, mods: {}, additional: [className]})}>
            {appTheme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>}
        </Button>
    )
}
