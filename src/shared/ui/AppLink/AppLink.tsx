import {classNames} from "@/shared/lib";
import styles from './AppLink.module.scss';
import {ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLink extends LinkProps {
    children: ReactNode
    className?: string
    theme: AppLinkTheme,
}

export const AppLink = (props: AppLink) => {

    const {children, className, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <Link to={to}
              className={classNames({
                  cls: styles.AppLink,
                  mods: {},
                  additional: [className, styles[theme]]
              })}
              {...otherProps}
        >
            {children}
        </Link>
    )
}
