import {classNames} from "@/shared/lib";
import styles from './Sidebar.module.scss';
import {useState} from "react";
import {Button, ButtonThemeStyles} from "@/shared/ui/Button/Button";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher/ThemeSwitcher";
import {LanguageSwitcher} from "@/widgets/LanguageSwitcher/LanguageSwitcher";

interface Sidebar {
    className?: string
}

export const Sidebar = (props: Sidebar) => {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleHandler = () => {
        setCollapsed(prevState => !prevState)
    }

    const {className} = props;

    return (
        <div className={classNames({
            cls: styles.sidebar,
            mods: {[styles.collapsed]: collapsed},
            additional: [className]
        })}>
            <Button theme={ButtonThemeStyles.DEFAULT} onClick={toggleHandler} children={'toggle'}/>
            <div className={classNames({cls: styles.switchers, mods: {}, additional: [className]})}>
                <ThemeSwitcher/>
                <LanguageSwitcher className={styles.switch}/>
            </div>
        </div>
    )
}
