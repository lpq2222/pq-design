import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, type FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
    const {className,theme, ...restProps} = props;
    const classes = classNames('pq-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}

export default Icon;