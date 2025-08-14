import {classNames} from "@/shared/lib";
import styles from './Header.module.scss';
import {useTheme} from "@/app/providers";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";

interface Header {
    className?: string
}

export const Header = (props: Header) => {

    const {className} = props;

    const {toggleTheme} = useTheme()

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
            <button className={classNames({cls: styles.toggle, mods: {}, additional: []})}
                    onClick={toggleTheme}>toggleTheme
            </button>
        </div>
    )
}

