import {classNames} from "@/shared/lib";
import styles from './Header.module.scss';
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";

interface Header {
    className?: string
}

export const Header = (props: Header) => {

    const {className} = props;

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

        </div>
    )
}

