import {classNames} from "@/shared/lib";
import styles from './Button.module.scss';
import {useTheme} from "@/app/providers";
import {ButtonHTMLAttributes, ReactNode} from "react";

export enum ButtonThemeStyles {
    UNSTYLED = 'unstyled',
    DEFAULT = 'default',
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme: ButtonThemeStyles
}

export const Button = (props: Button) => {

    const {children, className, theme = ButtonThemeStyles.DEFAULT, ...otherProps} = props;
    const {toggleTheme} = useTheme()


    return (
        <button className={classNames({cls: styles.button, mods: {}, additional: [styles[theme]]})}
                onClick={toggleTheme} {...otherProps}>{children}
        </button>
    )
}
