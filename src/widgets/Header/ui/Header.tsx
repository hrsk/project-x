import {classNames} from "@/shared/lib";
import styles from './Header.module.scss';
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";
import {Button, ButtonThemeStyles} from "@/shared/ui/Button/Button";
import LightThemeIcon from '@/shared/assets/icons/theme-light.svg';
import DarkThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import {useTheme, Theme} from "@/app/providers/ThemeProvider";

import avatar from '@/shared/assets/icons/user-32-32.png'

interface Header {
    className?: string
}

export const Header = (props: Header) => {

    const {className} = props;

    const {theme: appTheme} = useTheme();

    return (
        <div className={classNames({cls: styles.header, mods: {}, additional: [className]})}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={styles.link}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={styles.link}>
                    О сайте
                </AppLink>
            </div>
            <Button theme={ButtonThemeStyles.UNSTYLED}>
                {appTheme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>}
            </Button>
        </div>
    )
}

