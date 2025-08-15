import {useTranslation} from "react-i18next";
import {Button, ButtonThemeStyles} from "@/shared/ui/Button/Button";
import {classNames} from "@/shared/lib";
import styles from './LanguageSwitcher.module.scss'

interface Props {
    className?: string
}

export const LanguageSwitcher = (props: Props) => {

    const {className} = props

    const {t, i18n} = useTranslation()

    const translateHandler = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button className={classNames({cls: styles.langSwitch, mods: {}, additional: [className]})}
                theme={ButtonThemeStyles.DEFAULT}
                onClick={translateHandler}>{t('Language')}</Button>
    )
}

