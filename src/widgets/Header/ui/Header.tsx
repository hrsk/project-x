import {classNames} from "@/shared/lib";
import styles from './Header.module.scss';
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface Header {
    className?: string
}

export const Header = (props: Header) => {

    const {t} = useTranslation(['main', 'about'])

    const {className} = props;

    return (
        <div className={classNames({cls: styles.header, mods: {}, additional: [className]})}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={styles.link}>
                    {t('Main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={styles.link}>
                    {t('about:About')}
                </AppLink>
            </div>

        </div>
    )
}

